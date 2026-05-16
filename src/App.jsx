import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import AppLayout from './components/AppLayout'
import Contact from './pages/Contact'
import { calculateScore, getProfile } from './lib/scoring'

function AssessmentFlow() {
  const [step, setStep] = useState('assessment')
  const [answers, setAnswers] = useState(null)
  const [score, setScore] = useState(null)
  const [profile, setProfile] = useState(null)

  return (
    <AppLayout
      step={step}
      answers={answers}
      score={score}
      profile={profile}
      onAssessmentComplete={(ans) => {
        setAnswers(ans)
        setScore(calculateScore(ans))
        setProfile(getProfile(ans))
        setStep('loading')
      }}
      onLoadingComplete={() => setStep('gate')}
      onGateComplete={() => setStep('report')}
    />
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LangProvider isEmbed>
              <Contact />
            </LangProvider>
            
          }
        />
        <Route
          path="/assessment"
          element={
            <LangProvider>
              <AssessmentFlow />
            </LangProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
