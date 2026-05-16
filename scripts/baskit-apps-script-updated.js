// Updated Apps Script snippets for Contacts sheet mapping
// Use these in your Google Apps Script project (baskit-apps-script.js)

function handleAssessment(reqBody) {
  const data = reqBody || {}
  const sheetC = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('Contacts')

  const contactId = Utilities.getUuid()
  const timestamp = new Date()
  const type = 'assessment-gate'
  const assessId = data.assessment_id || ''

  sheetC.appendRow([
    contactId,
    timestamp,
    type,
    assessId,
    data.pic_name       || '', // E: PIC Name
    data.brand_name     || '', // F: Brand Name
    data.company_name   || '', // G: Company Name
    data.brand_category || '', // H: Brand Category
    data.email          || '', // I: Email
    data.whatsapp       || '', // J: WhatsApp
    data.lang           || 'en',// K: Language
    'assessment_app'           // L: Source
  ])
}

function handleContact(reqBody) {
  const data = reqBody || {}
  const sheetC = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('Contacts')

  const contactId = Utilities.getUuid()
  const timestamp = new Date()
  const type = data.form_type || 'contact'

  sheetC.appendRow([
    contactId,
    timestamp,
    type,
    '',                          // D: No assessment ID
    data.pic_name       || '',   // E: PIC Name
    data.brand_name     || '',   // F: Brand Name
    data.company_name   || '',   // G: Company Name
    data.brand_category || '',   // H: Brand Category
    data.email          || '',   // I: Email
    data.whatsapp       || '',   // J: WhatsApp
    data.lang           || 'en', // K: Language
    'contact_page'              // L: Source
  ])
}

// Note: Replace SPREADSHEET_ID with your spreadsheet ID and integrate these
// functions into your existing doGet/doPost dispatcher as appropriate.
