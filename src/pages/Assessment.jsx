import { useState } from 'react'
import OptionButton from '../components/OptionButton'
import MicroFeedback from '../components/MicroFeedback'
import { useLang } from '../context/LangContext'

const QUESTIONS = [
  {
    textKey: 'q1_text',
    options: ['q1_a', 'q1_b', 'q1_c', 'q1_d', 'q1_e'],
    feedbacks: [
      { icon: '💪', titleKey: 'q1_fb_a_title', msgKey: 'q1_fb_a_msg' },
      { icon: '✅', titleKey: 'q1_fb_b_title', msgKey: 'q1_fb_b_msg' },
      { icon: '⚠️', titleKey: 'q1_fb_c_title', msgKey: 'q1_fb_c_msg' },
      { icon: '🔧', titleKey: 'q1_fb_d_title', msgKey: 'q1_fb_d_msg' },
      { icon: '🚨', titleKey: 'q1_fb_e_title', msgKey: 'q1_fb_e_msg' },
    ],
  },
  {
    textKey: 'q2_text',
    options: ['q2_a', 'q2_b', 'q2_c', 'q2_d', 'q2_e'],
    feedbacks: [
      { icon: '⚡', titleKey: 'q2_fb_a_title', msgKey: 'q2_fb_a_msg' },
      { icon: '👍', titleKey: 'q2_fb_b_title', msgKey: 'q2_fb_b_msg' },
      { icon: '✅', titleKey: 'q2_fb_c_title', msgKey: 'q2_fb_c_msg' },
      { icon: '🎯', titleKey: 'q2_fb_d_title', msgKey: 'q2_fb_d_msg' },
      { icon: '💰', titleKey: 'q2_fb_e_title', msgKey: 'q2_fb_e_msg' },
    ],
  },
  {
    textKey: 'q3_text',
    options: ['q3_a', 'q3_b', 'q3_c', 'q3_d', 'q3_e'],
    feedbacks: [
      { icon: '⚡', titleKey: 'q3_fb_a_title', msgKey: 'q3_fb_a_msg' },
      { icon: '✅', titleKey: 'q3_fb_b_title', msgKey: 'q3_fb_b_msg' },
      { icon: '🔄', titleKey: 'q3_fb_c_title', msgKey: 'q3_fb_c_msg' },
      { icon: '🐢', titleKey: 'q3_fb_d_title', msgKey: 'q3_fb_d_msg' },
      { icon: '🔧', titleKey: 'q3_fb_e_title', msgKey: 'q3_fb_e_msg' },
    ],
  },
  {
    textKey: 'q4_text',
    options: ['q4_a', 'q4_b', 'q4_c', 'q4_d', 'q4_e'],
    feedbacks: [
      { icon: '🏆', titleKey: 'q4_fb_a_title', msgKey: 'q4_fb_a_msg' },
      { icon: '✅', titleKey: 'q4_fb_b_title', msgKey: 'q4_fb_b_msg' },
      { icon: '🔧', titleKey: 'q4_fb_c_title', msgKey: 'q4_fb_c_msg' },
      { icon: '🌱', titleKey: 'q4_fb_d_title', msgKey: 'q4_fb_d_msg' },
      { icon: '💡', titleKey: 'q4_fb_e_title', msgKey: 'q4_fb_e_msg' },
    ],
  },
  {
    textKey: 'q5_text',
    options: ['q5_a', 'q5_b', 'q5_c', 'q5_d', 'q5_e'],
    feedbacks: [
      { icon: '🚀', titleKey: 'q5_fb_a_title', msgKey: 'q5_fb_a_msg' },
      { icon: '📈', titleKey: 'q5_fb_b_title', msgKey: 'q5_fb_b_msg' },
      { icon: '🌱', titleKey: 'q5_fb_c_title', msgKey: 'q5_fb_c_msg' },
      { icon: '🔑', titleKey: 'q5_fb_d_title', msgKey: 'q5_fb_d_msg' },
      { icon: '💡', titleKey: 'q5_fb_e_title', msgKey: 'q5_fb_e_msg' },
    ],
  },
]

export default function Assessment({ onComplete }) {
  const { t } = useLang()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([null, null, null, null, null])
  const [feedbackData, setFeedbackData] = useState(null)

  const q = QUESTIONS[step]
  const selected = answers[step]
  const pct = Math.round(((step + 1) / QUESTIONS.length) * 100)

  function handleSelect(idx) {
    const next = [...answers]
    next[step] = idx
    setAnswers(next)
    setFeedbackData(q.feedbacks[idx])
  }

  function handleNext() {
    if (selected === null) return
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1)
      setFeedbackData(null)
    } else {
      onComplete(answers)
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col">
      {/* Progress bar */}
      <div className="px-6 pt-5 max-w-[600px] mx-auto w-full">
        <div className="flex justify-between mb-1.5">
          <span className="text-xs text-[#9B9CA1] font-medium">{t('question_of', step + 1)}</span>
          <span className="text-xs text-[#9B9CA1] font-medium">{pct}%</span>
        </div>
        <div className="w-full bg-[#E2DDD5] rounded-full h-1">
          <div
            className="bg-[#085B59] rounded-full h-1 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Content — scrollable, leaves room for sticky next button on mobile */}
      <div className="flex-1 px-6 pt-7 pb-32 md:pb-8 max-w-[600px] mx-auto w-full">
        <p className="text-[11px] font-bold text-[#9B9CA1] tracking-[2px] uppercase mb-3">
          Question {step + 1}
        </p>
        <h1 className="font-sans font-medium text-[26px] text-[#383B46] leading-[1.3] mb-7 tracking-[-0.2px]">
          {t(q.textKey)}
        </h1>

        <div className="flex flex-col gap-2.5 mb-3">
          {q.options.map((optKey, idx) => (
            <OptionButton
              key={idx}
              label={t(optKey)}
              selected={selected === idx}
              onClick={() => handleSelect(idx)}
            />
          ))}
        </div>

        {feedbackData && (
          <MicroFeedback
            key={feedbackData.titleKey}
            icon={feedbackData.icon}
            title={t(feedbackData.titleKey)}
            msg={t(feedbackData.msgKey)}
          />
        )}

        {/* Desktop next button */}
        <div className="hidden md:block mt-6">
          <button
            onClick={handleNext}
            disabled={selected === null}
            className="w-full bg-[#FF8B00] text-white font-bold rounded-full py-3.5 text-base hover:bg-[#E67E00] transition disabled:bg-[#E2DDD5] disabled:text-[#9B9CA1] disabled:cursor-not-allowed cursor-pointer"
          >
            {t('next')} →
          </button>
        </div>
      </div>

      {/* Mobile sticky next button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#FAFAF7]/95 backdrop-blur border-t border-[#E2DDD5]">
        <div className="max-w-[560px] mx-auto">
          <button
            onClick={handleNext}
            disabled={selected === null}
            className="w-full bg-[#FF8B00] text-white font-bold rounded-full py-3.5 text-base hover:bg-[#E67E00] transition disabled:bg-[#E2DDD5] disabled:text-[#9B9CA1] disabled:cursor-not-allowed cursor-pointer"
          >
            {t('next')} →
          </button>
        </div>
      </div>
    </div>
  )
}
