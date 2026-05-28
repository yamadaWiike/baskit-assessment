// answers array index: [margin, top, agility, readiness, vol]
// each answer is 0-based index of selected option (0 = first option = best for most questions)

const RAW_VALUES = {
  margin:    [5, 4, 3, 2, 1],
  top:       [5, 4, 3, 2, 1],
  agility:   [5, 4, 3, 2, 1],
  readiness: [5, 4, 3, 2, 1],
  vol:       [5, 4, 3, 2, 1],
}

const WEIGHTS = { margin: 0.30, top: 0.20, agility: 0.15, readiness: 0.15, vol: 0.20 }

export function calculateScore(answers) {
  const [mi, ti, ai, ri, vi] = answers
  const m = RAW_VALUES.margin[mi]
  const t = RAW_VALUES.top[ti]
  const a = RAW_VALUES.agility[ai]
  const r = RAW_VALUES.readiness[ri]
  const v = RAW_VALUES.vol[vi]

  const weighted =
    m * WEIGHTS.margin +
    t * WEIGHTS.top +
    a * WEIGHTS.agility +
    r * WEIGHTS.readiness +
    v * WEIGHTS.vol

  return Math.min(Math.round((weighted / 5) * 100), 97)
}

export function getScoreLabel(score, t) {
  if (score >= 80) return t('score_label_high')
  if (score >= 60) return t('score_label_good')
  if (score >= 40) return t('score_label_mid')
  if (score >= 20) return t('score_label_low')
  return t('score_label_vlow')
}

// Profiling waterfall — answers: [margin, top, agility, readiness, vol]
export function getProfile(answers) {
  const [mi, ti, , ri, vi] = answers

  if (vi <= 1 && mi <= 1 && ri <= 1) return 'highPerformer'
  if (ri >= 2) return 'earlyBuilder'
  if (ti >= 2) return 'cashConstrained'
  if (vi >= 3) return 'earlyStage'
  if (mi >= 3) return 'thinMargin'
  return 'default'
}

export function getScalePosition(score) {
  if (score <= 39) return 15
  if (score <= 69) return 50
  return 85
}
