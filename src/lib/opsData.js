// ============================================================
// OPS DATA CONFIG — src/lib/opsData.js
// ============================================================
// Single source of truth for all numbers from ops team.
// Structure mirrors the GSheet template given to ops.
//
// HOW TO UPDATE:
// 1. Ops fills in the GSheet template
// 2. Copy numbers from GSheet into this file
// 3. Save — report page updates automatically
// No other files need to be changed.
// ============================================================


// ── TAB 1: ACTIVATION DATA ─────────────────────────────────
// Source: GSheet "📊 Social Proof" tab
// Columns: Avg. days to first activation | Avg. outlet growth (6 months) | Avg. cost reduction %

export const activationData = {
  highPerformer:   { days: 14,  outletGrowth: '1.5–2×',  costReduction: '20–35%' }, // DUMMY
  earlyBuilder:    { days: 21,  outletGrowth: '2–3×',    costReduction: null      }, // DUMMY
  cashConstrained: { days: 18,  outletGrowth: '2–3×',    costReduction: null      }, // DUMMY
  earlyStage:      { days: 16,  outletGrowth: '4–6×',    costReduction: null      }, // DUMMY
  thinMargin:      { days: 25,  outletGrowth: '2–3×',    costReduction: '25–40%'  }, // DUMMY
  default:         { days: 19,  outletGrowth: '2–4×',    costReduction: '20–35%'  }, // DUMMY
}

// Global fallback — used when profile-specific data is null
// Update these first for fastest visible change
export const globalActivation = {
  days:          '18',      // TODO: replace with real global average from ops
  outletGrowth:  '2–4×',   // TODO: replace with real global average from ops
  costReduction: '20–35%', // TODO: replace with real global average from ops
}


// ── TAB 2: CHART CURVE DATA ────────────────────────────────
// Source: GSheet "📈 Chart Data" tab
// All values = average outlet count at each time point


export const chartData = {
  highPerformer:   { before: 45,  month1With: 62,  month3With: 98,  month6With: 140, month6Without: 55  }, // DUMMY
  earlyBuilder:    { before: 20,  month1With: 32,  month3With: 65,  month6With: 110, month6Without: 28  }, // DUMMY
  cashConstrained: { before: 80,  month1With: 105, month3With: 160, month6With: 230, month6Without: 95  }, // DUMMY
  earlyStage:      { before: 12,  month1With: 25,  month3With: 58,  month6With: 95,  month6Without: 18  }, // DUMMY
  thinMargin:      { before: 60,  month1With: 78,  month3With: 115, month6With: 165, month6Without: 72  }, // DUMMY
  default:         { before: 50,  month1With: 70,  month3With: 115, month6With: 175, month6Without: 62  }, // DUMMY
  // Global average — used when profile data is null
  globalAverage:   { before: 45,  month1With: 62,  month3With: 102, month6With: 152, month6Without: 55  }, // DUMMY
}

// ── HELPERS ────────────────────────────────────────────────

// Get chart metrics for a profile
// Priority: profile-specific → global fallback
export function getChartMetrics(profileKey) {
  const d = activationData[profileKey] ?? {}
  const g = globalActivation
  return {
    outletGrowth:  d.outletGrowth  ?? g.outletGrowth,
    days:          d.days != null ? String(d.days) : g.days,
    costReduction: d.costReduction ?? g.costReduction,
  }
}

// Get normalized chart curve data for SVG rendering
// Returns values relative to "before" (before = 1.0)
// Priority: profile-specific → globalAverage → hardcoded shape
export function getChartCurveData(profileKey) {
  const p = chartData[profileKey]
  const g = chartData.globalAverage

  const before        = p?.before        ?? g?.before        ?? null
  const month1With    = p?.month1With    ?? g?.month1With    ?? null
  const month3With    = p?.month3With    ?? g?.month3With    ?? null
  const month6With    = p?.month6With    ?? g?.month6With    ?? null
  const month6Without = p?.month6Without ?? g?.month6Without ?? null

  // If no real data, return null so chart uses default SVG curve
  if (!before || !month6With) {
    if (import.meta.env.DEV) {
      console.warn('[opsData] No chart data for profile:', profileKey, '— using default curve')
    }
    return null
  }

  // Normalize relative to before value
  return {
    before:        1,
    month1With:    month1With   / before,
    month3With:    month3With   / before,
    month6With:    month6With   / before,
    month6Without: month6Without / before,
  }
}
