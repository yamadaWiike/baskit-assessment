import { useState, useRef } from 'react'
import FormField from '../components/FormField'
import PhoneField from '../components/PhoneField'
import { useLang } from '../context/LangContext'
import { submitAssessment, submitGate } from '../lib/submit'
import { BarChart3, TrendingUp, Sparkles, Compass } from "lucide-react"

export default function Gate({ answers, score, profile, onComplete }) {
  const { t, lang } = useLang()

  const [form, setForm] = useState({
    brandName: '',
    brandCategory: '',
    orgName: '',
    picName: '',
    whatsapp: '',
    email: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const submittingRef = useRef(false)

  const set = (key) => (val) => setForm((f) => ({ ...f, [key]: val }))

  function validate() {
    const e = {}
    if (!form.brandName.trim()) e.brandName = 'Required'
    if (!form.brandCategory) e.brandCategory = 'Required'
    if (!form.orgName.trim()) e.orgName = 'Required'
    if (!form.picName.trim()) e.picName = 'Required'
    if (!form.whatsapp.trim()) e.whatsapp = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    return e
  }

async function handleSubmit(e) {
  e.preventDefault()
  if (submittingRef.current) return  // prevent double submit

  const errs = validate()
  if (Object.keys(errs).length) {
    setErrors(errs)
    return
  }

  // lock to prevent duplicate submissions after validation passes
  submittingRef.current = true
  setSubmitting(true)
  try {
    // 1. Submit assessment answers only
    const ANSWER_OPTS = [
      ["More than 40%","25–39%","15–24%","5–14%","Less than 5%"],
      ["3–7 days","8–14 days","15–21 days","21–30 days","More than 30 days"],
      ["Same day","1–2 days","3–5 business days","1–2 weeks","Longer than 2 weeks"],
      ["Fully ready","Mostly ready","Partially ready","Limited readiness","Not ready yet"],
      ["More than 10,000","5,000–10,000","3,000–4,999","1,000–2,999","Less than 1,000"],
    ]
    const answerTexts   = answers.map((idx, qIdx) => ANSWER_OPTS[qIdx][idx])
    const answerIndices = answers  // raw indices [0,3,0,0,1]
    const assessmentId = await submitAssessment(answerTexts, answerIndices, score, profile, lang)

    // 2. Submit gate contact info, linked to assessment
    await submitGate({
      picName:       form.picName,
      brandName:     form.brandName,
      orgName:       form.orgName,
      brandCategory: form.brandCategory,
      whatsapp:      form.whatsapp,
      email:         form.email || null,
      lang,
    }, assessmentId)

  } catch {
    // Proceed to report even if submission fails
  }
  onComplete(form)
}

  const categoryOptions = [
    { value: 'fmcg', label: t('cat_fmcg') },
    { value: 'bpc', label: t('cat_bpc') },
    { value: 'others', label: t('cat_others') },
  ]

  const previewTags = [
  {
    label: t("gate_preview_1"),
    icon: BarChart3,
  },
  {
    label: t("gate_preview_2"),
    icon: TrendingUp,
  },
  {
    label: t("gate_preview_3"),
    icon: Sparkles,
  },
  {
    label: t("gate_preview_4"),
    icon: Compass,
  },
]

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col">
      <div className="flex-1 flex items-start justify-center px-6 py-8">
        <div className="w-full max-w-[460px]">
          {/* Header */}
          <p className="text-[10.5px] font-sans font-bold text-[#085B59] tracking-[2.5px] uppercase mb-3">
            {t('gate_eyebrow')}
          </p>
          <h1 className="font-sans font-bold text-[36px] text-[#383B46] leading-[1.15] mb-2 tracking-[-0.2px]">
            {t('gate_headline')}
          </h1>
          <p className="text-sm text-[#9B9CA1] leading-[1.7] mb-5">
            {t('gate_sub')}
          </p>

          {/* Preview tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {previewTags.map((tag, i) => 
            {
              const Icon = tag.icon
              return (
                <div
                  key={i}
                  className="w-95 bg-[#FAF7F2] border border-[#E8DDD0] text-[#8B5E3C] text-[12px] font-semibold px-3 py-3 rounded-[12px] flex items-center gap-3"
                >
                  <div
                    className="w-8 h-8 rounded-[8px] bg-[#F3E8DA] flex items-center justify-center text-[#8B5E3C]">
                    <Icon size={14} strokeWidth={1.75} />
                  </div>
                 
                  {tag.label}
                </div>
              )
             }
           )}
          </div>

          {/* Divider */}
          <div className="h-px bg-[#E2DDD5] mb-6" />

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <FormField
              label={t('field_brand_name')}
              value={form.brandName}
              onChange={set('brandName')}
              error={errors.brandName}
              required
            />
            <FormField
              label={t('field_brand_category')}
              type="select"
              value={form.brandCategory}
              onChange={set('brandCategory')}
              error={errors.brandCategory}
              required
              options={categoryOptions}
              placeholder={t('select_placeholder')}
            />
            <FormField
              label={t('field_org_name')}
              value={form.orgName}
              onChange={set('orgName')}
              error={errors.orgName}
              required
            />
            <FormField
              label={t('field_pic_name')}
              value={form.picName}
              onChange={set('picName')}
              error={errors.picName}
              required
            />
            <PhoneField
              label={t('field_whatsapp')}
              value={form.whatsapp}
              onChange={set('whatsapp')}
              error={errors.whatsapp}
              required
            />
            <FormField
              label={t('field_email')}
              type="email"
              value={form.email}
              onChange={set('email')}
              error={errors.email}
              required
            />

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#FF8B00] text-white font-bold rounded-full py-4 text-base hover:bg-[#E67E00] transition mt-1 disabled:opacity-60 cursor-pointer"
            >
              {submitting ? '…' : t('gate_cta')}
            </button>

            <p className="text-xs text-[#9B9CA1] text-center">{t('gate_privacy')}</p>
          </form>
        </div>
      </div>
    </div>
  )
}
