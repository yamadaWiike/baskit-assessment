import { useState } from 'react'
import TabSwitcher from '../components/TabSwitcher'
import FormField from '../components/FormField'
import Sidebar from '../components/Sidebar'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useLang } from '../context/LangContext'
import { submitContact } from '../lib/submit'

// iframe-resizer child script for seamless Framer embed
import 'iframe-resizer/js/iframeResizer.contentWindow'

function BrandTab() {
  const { t } = useLang()
  const [form, setForm] = useState({
    brandName: '', brandCategory: '', orgName: '',
    picName: '', whatsapp: '', email: '',
  })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const { lang } = useLang()

  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }))

  function validate() {
    const e = {}
    if (!form.brandName.trim()) e.brandName = 'Required'
    if (!form.brandCategory) e.brandCategory = 'Required'
    if (!form.orgName.trim()) e.orgName = 'Required'
    if (!form.picName.trim()) e.picName = 'Required'
    if (!form.whatsapp.trim()) e.whatsapp = 'Required'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)
    try {
      await submitContact({
        formType: 'brand',
        picName: form.picName,
        brandName: form.brandName,
        companyName: form.orgName,
        brandCategory: form.brandCategory,
        email: form.email || null,
        whatsapp: form.whatsapp,
        lang,
      })
    } catch { /* silent — placeholder creds */ }
    setDone(true)
  }

  if (done) return <SuccessMessage />

  const catOptions = [
    { value: 'fmcg', label: t('cat_fmcg') },
    { value: 'bpc', label: t('cat_bpc') },
    { value: 'others', label: t('cat_others') },
  ]

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label={t('field_brand_name')} value={form.brandName} onChange={set('brandName')} error={errors.brandName} required />
      <FormField label={t('field_brand_category')} type="select" value={form.brandCategory} onChange={set('brandCategory')} error={errors.brandCategory} required options={catOptions} placeholder={t('select_placeholder')} />
      <FormField label={t('field_org_name')} value={form.orgName} onChange={set('orgName')} error={errors.orgName} required />
      <FormField label={t('field_pic_name')} value={form.picName} onChange={set('picName')} error={errors.picName} required />
      <FormField label={t('field_whatsapp')} type="tel" value={form.whatsapp} onChange={(value) => { const sanitizedValue = value.replace(/\D/g, "") 
        set("whatsapp")(sanitizedValue) }} error={errors.whatsapp} required />
      <FormField label={t('field_email')} type="email" value={form.email} onChange={set('email')} />
      <button type="submit" disabled={submitting} className="w-full bg-[#FF8B00] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#FF9F2E] transition disabled:opacity-60 cursor-pointer">
        {t('contact_cta')}
      </button>
    </form>
  )
}

function DistributorTab() {
  const { t } = useLang()
  const { lang } = useLang()
  const [form, setForm] = useState({ distName: '', picName: '', whatsapp: '', email: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }))

  function validate() {
    const e = {}
    if (!form.distName.trim()) e.distName = 'Required'
    if (!form.picName.trim()) e.picName = 'Required'
    if (!form.whatsapp.trim()) e.whatsapp = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)
    try {
      await submitContact({
        formType: 'distributor',
        picName: form.picName,
        companyName: form.distName,
        email: form.email,
        whatsapp: form.whatsapp,
        lang,
      })
    } catch { /* silent */ }
    setDone(true)
  }

  if (done) return <SuccessMessage />

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label={t('field_distributor_name')} value={form.distName} onChange={set('distName')} error={errors.distName} required />
      <FormField label={t('field_pic_name')} value={form.picName} onChange={set('picName')} error={errors.picName} required />
      <FormField label={t('field_whatsapp')} type="tel" value={form.whatsapp} onChange={(value) => { const sanitizedValue = value.replace(/\D/g, "")
        set("whatsapp")(sanitizedValue)}} error={errors.whatsapp} required />
      <FormField label={t('field_email_required')} type="email" value={form.email} onChange={set('email')} error={errors.email} required />
      <button type="submit" disabled={submitting} className="w-full bg-[#FF8B00] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#FF9F2E] transition disabled:opacity-60 cursor-pointer">
        {t('contact_cta')}
      </button>
    </form>
  )
}

function OthersTab() {
  const { t } = useLang()
  const { lang } = useLang()
  const [form, setForm] = useState({
    fullName: '', company: '', email: '', phone: '',
    howHeard: '', howHelp: '', bizSize: '', intention: '',
    agreedComms: false, isDecision: false,
  })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }))
  const setCheck = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.checked }))

  function validate() {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Required'
    if (!form.company.trim()) e.company = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    if (!form.phone.trim()) e.phone = 'Required'
    if (!form.howHeard) e.howHeard = 'Required'
    if (!form.howHelp) e.howHelp = 'Required'
    if (!form.bizSize) e.bizSize = 'Required'
    if (!form.intention.trim()) e.intention = 'Required'
    if (!form.agreedComms) e.agreedComms = 'Required'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)
    try {
      await submitContact({
        formType: 'others',
        picName: form.fullName,
        companyName: form.company,
        email: form.email,
        whatsapp: form.phone,
        howHeard: form.howHeard,
        howHelp: form.howHelp,
        businessSize: form.bizSize,
        intention: form.intention,
        agreedComms: form.agreedComms,
        isDecisionMaker: form.isDecision,
        lang,
      })
    } catch { /* silent */ }
    setDone(true)
  }

  if (done) return <SuccessMessage />

  const howHeardOpts = [
    { value: 'search', label: t('how_heard_search') },
    { value: 'social', label: t('how_heard_social') },
    { value: 'referral', label: t('how_heard_referral') },
    { value: 'event', label: t('how_heard_event') },
    { value: 'other', label: t('how_heard_other') },
  ]
  const howHelpOpts = [
    { value: 'general', label: t('how_help_general') },
    { value: 'demo', label: t('how_help_demo') },
    { value: 'sales', label: t('how_help_sales') },
    { value: 'support', label: t('how_help_support') },
    { value: 'tech', label: t('how_help_tech') },
    { value: 'partner', label: t('how_help_partner') },
  ]
  const bizSizeOpts = [
    { value: 'small', label: t('biz_small') },
    { value: 'medium', label: t('biz_medium') },
    { value: 'large', label: t('biz_large') },
    { value: 'enterprise', label: t('biz_enterprise') },
  ]

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label={t('field_full_name')} value={form.fullName} onChange={set('fullName')} error={errors.fullName} required />
      <FormField label={t('field_company_name')} value={form.company} onChange={set('company')} error={errors.company} required />
      <FormField label={t('field_email_required')} type="email" value={form.email} onChange={set('email')} error={errors.email} required />
      <FormField label={t('field_phone')} type="tel" value={form.phone} onChange={(value) => { const sanitizedValue = value.replace(/\D/g, "")
        set("phone")(sanitizedValue) }} error={errors.phone} required />
      <FormField label={t('field_how_heard')} type="select" value={form.howHeard} onChange={set('howHeard')} error={errors.howHeard} required options={howHeardOpts} placeholder={t('select_placeholder')} />
      <FormField label={t('field_how_help')} type="select" value={form.howHelp} onChange={set('howHelp')} error={errors.howHelp} required options={howHelpOpts} placeholder={t('select_placeholder')} />
      <FormField label={t('field_biz_size')} type="select" value={form.bizSize} onChange={set('bizSize')} error={errors.bizSize} required options={bizSizeOpts} placeholder={t('select_placeholder')} />
      <FormField label={t('field_intention')} type="textarea" value={form.intention} onChange={set('intention')} error={errors.intention} required placeholder={t('intention_placeholder')} />

      {/* Checkboxes */}
      <div className="flex flex-col gap-3">
        <label className={`flex items-start gap-3 cursor-pointer text-sm ${errors.agreedComms ? 'text-red-400' : 'text-[#4C4F59]'}`}>
          <input
            type="checkbox"
            checked={form.agreedComms}
            onChange={setCheck('agreedComms')}
            className="mt-0.5 accent-[#FF8B00]"
          />
          <span>{t('checkbox_comms')} <span className="text-red-400">*</span></span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer text-sm text-[#4C4F59]">
          <input
            type="checkbox"
            checked={form.isDecision}
            onChange={setCheck('isDecision')}
            className="mt-0.5 accent-[#FF8B00]"
          />
          <span>{t('checkbox_decision')}</span>
        </label>
      </div>

      <button type="submit" disabled={submitting} className="w-full bg-[#FF8B00] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#FF9F2E] transition disabled:opacity-60 cursor-pointer">
        {t('contact_cta')}
      </button>
    </form>
  )
}

function SuccessMessage() {
  const { t } = useLang()
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL

  return (
    <div className="pt-10 pb-10">
      <div className="max-w-[440px]">
        <p className="text-[32px] leading-[1.05] tracking-[-0.04em] font-semibold text-[#24313A] mb-4">
          {t('contact_success_title')}
        </p>

        <p
          className="text-[17px] leading-8 text-[#62656E] max-w-[460px]"
          dangerouslySetInnerHTML={{ __html: t('next_steps_sub') }}
        />

        <div className="my-7 h-px w-full bg-[#E8DDD0]" />

        <p className="text-[14px] leading-6 text-[#8E9297] italic max-w-[420px]">
          {t('next_steps_italic')}
        </p>

        <div className="mt-7 flex items-center gap-3">
          <a
            href={calendlyUrl !== 'placeholder' ? calendlyUrl : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#FF8B00] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#FF9F2E] hover:scale-[1.02]"
          >
            {t('btn_schedule')}
          </a>

          <a
            href="https://baskit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#085B59] hover:opacity-70"
          >
            Back to homepage
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  const { t } = useLang()
  const [activeTab, setActiveTab] = useState('brand')

  const tabs = [
    { value: 'brand', label: t('contact_tab_brand') },
    { value: 'distributor', label: t('contact_tab_distributor') },
    { value: 'others', label: t('contact_tab_others') },
  ]

  return (
    <div className="bg-transparent">
      <div className="flex justify-end px-5 pt-4 pb-2">
        {/* <LanguageSwitcher /> */}
      </div>

      <div className="px-5 pb-8 max-w-3xl mx-auto w-full">
        <div className="flex gap-10 items-center">
          {/* Main form */}
          <div className="flex-1 min-w-0">
            <TabSwitcher tabs={tabs} active={activeTab} onChange={setActiveTab} />
            <div className="mt-6">
              {activeTab === 'brand' && <BrandTab key="brand" />}
              {activeTab === 'distributor' && <DistributorTab key="distributor" />}
              {activeTab === 'others' && <OthersTab key="others" />}
            </div>
          </div>

          {/* Sidebar — hidden on mobile */}
          <Sidebar type={activeTab} />
        </div>
      </div>
    </div>
  )
}
