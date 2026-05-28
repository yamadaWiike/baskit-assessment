import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL     = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY     = import.meta.env.VITE_SUPABASE_ANON_KEY
const APPS_SCRIPT_URL  = import.meta.env.VITE_APPS_SCRIPT_URL

const supabaseReady =
  SUPABASE_URL && SUPABASE_KEY &&
  SUPABASE_URL !== 'placeholder' &&
  SUPABASE_KEY !== 'placeholder'

let supabase = null
if (supabaseReady) {
  try {
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
  } catch {
    console.warn('[submit] Supabase init failed')
  }
}

function scoreToLabel(score) {
  if (score >= 80) return 'Distribution Ready'
  if (score >= 60) return 'Almost Ready'
  if (score >= 40) return 'Building Readiness'
  if (score >= 20) return 'Early Stage'
  return 'Foundation Stage'
}

async function postToGSheet(data) {
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL === 'placeholder') {
    console.warn('[submit] VITE_APPS_SCRIPT_URL not set')
    return null
  }
  console.log('[submit] Sending to GSheet:', data)
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(data),
    })
    const json = await response.json()
    console.log('[submit] GSheet:', json)
    return json
  } catch (err) {
    console.warn('[submit] GSheet failed:', err.message)
    return null
  }
}

function getAssessmentRefFromSheetResponse(response) {
  return (
    response?.assessment_id ||
    response?.assessmentId ||
    response?.ref_id ||
    response?.refId ||
    response?.id ||
    null
  )
}

// ── Assessment answers only — no contact info ──
// answerTexts   = ["More than 40%", "21–30 days", ...]  → GSheet (human-readable)
// answerIndices = [0, 3, 0, 0, 1]                       → Supabase (numeric RAW_VALUES)
export async function submitAssessment(answerTexts, answerIndices, score, profile, lang) {
  const RAW_VALUES = {
    margin:    [5, 4, 3, 2, 1],
    top:       [5, 4, 3, 2, 1],
    agility:   [5, 4, 3, 2, 1],
    readiness: [5, 4, 3, 2, 1],
    vol:       [5, 4, 3, 2, 1],
  }

  // Supabase — numeric values per scoring.js RAW_VALUES
  const supabaseData = {
    q1_margin:    RAW_VALUES.margin[answerIndices[0]],
    q2_top:       RAW_VALUES.top[answerIndices[1]],
    q3_agility:   RAW_VALUES.agility[answerIndices[2]],
    q4_readiness: RAW_VALUES.readiness[answerIndices[3]],
    q5_volume:    RAW_VALUES.vol[answerIndices[4]],
    score,
    score_label:  scoreToLabel(score),
    profile,
    lang,
    source: 'assessment_app',
  }

  // GSheet — text labels (what the user actually selected)
  const gsheetData = {
    q1_margin:    answerTexts[0],
    q2_top:       answerTexts[1],
    q3_agility:   answerTexts[2],
    q4_readiness: answerTexts[3],
    q5_volume:    answerTexts[4],
    score,
    score_label:  scoreToLabel(score),
    profile,
    lang,
    source: 'assessment_app',
  }

  let assessmentRef = null
  if (supabase) {
    const { data: inserted, error } = await supabase
      .from('assessment_submissions')
      .insert(supabaseData)
      .select('id, ref_id')
      .single()
    if (error) console.warn('[submit] Supabase assessment error:', error.message)
    else assessmentRef = inserted?.ref_id
  }

  // Send to GSheet after the Supabase attempt. If Apps Script returns
  // the generated A-001-style ID, use it to link the gate contact row.
  const sheetResponse = await postToGSheet({
    ...gsheetData,
    ref_id: assessmentRef,
    assessment_id: assessmentRef,
  })
  assessmentRef = assessmentRef || getAssessmentRefFromSheetResponse(sheetResponse)

  return assessmentRef
}

// ── Gate form — contact info linked to assessment ──
export async function submitGate(contactData, assessmentRef) {
  const data = {
    assessment_id:  assessmentRef || null,  // ← A-001 format
    form_type:      'assessment-gate',
    pic_name:       contactData.picName       || null,
    brand_name:     contactData.brandName     || null,
    company_name:   contactData.orgName       || null,
    brand_category: contactData.brandCategory || null,
    email:          contactData.email         || null,
    whatsapp:       contactData.whatsapp      || null,
    lang:           contactData.lang,
    source:         'assessment_gate',
  }

  await postToGSheet(data)

  if (supabase) {
    const { error } = await supabase
      .from('contact_submissions')
      .insert(data)
    if (error) console.warn('[submit] Supabase gate error:', error.message)
  }
}

// ── Contact page — Brand tab → Supabase, all tabs → GSheet ──
export async function submitContact(contactData) {
  const data = {
    assessment_id:     null,
    form_type:         contactData.formType,
    pic_name:          contactData.picName       || null,
    brand_name:        contactData.brandName     || null,
    company_name:      contactData.companyName   || null,
    brand_category:    contactData.brandCategory || null,
    email:             contactData.email         || null,
    whatsapp:          contactData.whatsapp      || null,
    how_heard:         contactData.howHeard      || null,
    how_help:          contactData.howHelp       || null,
    business_size:     contactData.businessSize  || null,
    intention:         contactData.intention     || null,
    agreed_comms:      contactData.agreedComms      === true,
    is_decision_maker: contactData.isDecisionMaker  === true,
    lang:              contactData.lang,
    source:            'contact_page',
  }

  await postToGSheet(data)

  if (supabase && contactData.formType === 'brand') {
    const { error } = await supabase
      .from('contact_submissions')
      .insert(data)
    if (error) console.warn('[submit] Supabase contact error:', error.message)
  }
}
