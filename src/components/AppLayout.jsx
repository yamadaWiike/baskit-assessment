import { useEffect } from 'react'
import Navbar from './Navbar'
import Assessment from '../pages/Assessment'
import Loading from '../pages/Loading'
import Gate from '../pages/Gate'
import Report from '../pages/Report'

export default function AppLayout({ step, onAssessmentComplete, onLoadingComplete, onGateComplete, ...rest }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [step])

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      {step !== 'loading' && <Navbar />}

      {step === 'assessment' && <Assessment {...rest} onComplete={onAssessmentComplete} />}
      {step === 'loading'    && <Loading {...rest} onDone={onLoadingComplete} />}
      {step === 'gate'       && <Gate {...rest} onComplete={onGateComplete} />}
      {step === 'report'     && <Report {...rest} />}
    </div>
  )
}
