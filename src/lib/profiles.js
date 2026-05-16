// All 6 profile content — EN + ID
// TODO: Replace dummy chart metrics with real ops data post-launch

export const profiles = {
  highPerformer: {
    en: {
      headline: 'You\'re already running at full potential.',
      sub: 'Strong foundation across volume, margin, and readiness. The next opportunity is to consolidate distribution and eliminate cost drag that quietly keeps adding up.',
    },
    id: {
      headline: 'Kamu sudah berjalan di potensi penuh.',
      sub: 'Fondasi yang kuat di volume, margin, dan kesiapan. Peluang berikutnya adalah mengkonsolidasi distribusi dan menghilangkan cost drag yang diam-diam terus bertambah.',
    },
  },
  earlyBuilder: {
    en: {
      headline: 'The road to retail is closer than you think.',
      sub: 'Your brand has real potential. The right preparation now determines how fast you move when the doors open — and Baskit has done this 50+ times.',
    },
    id: {
      headline: 'Jalan ke retail lebih dekat dari yang kamu kira.',
      sub: 'Brand kamu punya potensi nyata. Persiapan yang tepat sekarang menentukan seberapa cepat kamu bergerak saat pintunya terbuka — dan Baskit sudah melakukannya 50+ kali.',
    },
  },
  cashConstrained: {
    en: {
      headline: 'Your growth is ready. Your cash flow isn\'t.',
      sub: 'The traction is there. The constraint is capital tied up in payment cycles — and that\'s exactly what Baskit Cash Flow is designed to unlock.',
    },
    id: {
      headline: 'Pertumbuhanmu siap. Cash flow-mu belum.',
      sub: 'Traksi sudah ada. Kendalanya adalah modal yang terikat di siklus pembayaran — dan itulah yang Baskit Cash Flow dirancang untuk membukanya.',
    },
  },
  earlyStage: {
    en: {
      headline: 'You have traction. Now let\'s build on it.',
      sub: 'Early volume is a real signal. The brands that scale fastest from here aren\'t the ones going it alone — they\'re the ones who connected to the right infrastructure early.',
    },
    id: {
      headline: 'Kamu punya traksi. Sekarang mari kita bangun di atasnya.',
      sub: 'Volume awal adalah sinyal nyata. Brand yang paling cepat scale dari sini bukan yang sendirian mencari jalan — tapi yang lebih awal menyambungkan diri ke infrastruktur yang tepat.',
    },
  },
  thinMargin: {
    en: {
      headline: 'Good traction. Let\'s fix the channel economics.',
      sub: 'Thin distributor margins create structural drag that limits channel growth regardless of product quality. Baskit\'s shared cost model changes this equation.',
    },
    id: {
      headline: 'Traksi bagus. Mari perbaiki ekonomi channelnya.',
      sub: 'Margin distributor yang tipis menciptakan kerugian struktural yang menghambat pertumbuhan channel terlepas dari kualitas produk. Model biaya bersama Baskit mengubah persamaan ini.',
    },
  },
  default: {
    en: {
      headline: 'You\'re ready to scale.',
      sub: 'Your brand already has the foundation. The difference between brands that stall and brands that keep growing is usually one thing: distribution infrastructure built at the right time.',
    },
    id: {
      headline: 'Kamu siap untuk scale.',
      sub: 'Brand kamu sudah punya fondasinya. Perbedaan antara brand yang stagnan dan brand yang terus berkembang biasanya satu hal: infrastruktur distribusi yang dibangun di waktu yang tepat.',
    },
  },
}

// Metrics now live in opsData.js — re-export helpers for backward compat
export { getChartMetrics, getChartCurveData } from './opsData'

// TODO: Replace with real data post-launch
export const comparisonRows = {
  highPerformer: {
    en: [
      { metric: 'Outlet Reach', now: '500+ outlets', baskit: '1,500+ outlets' },
      { metric: 'Activation Speed', now: '2–3 weeks', baskit: '3–5 days' },
      { metric: 'Cost Efficiency', now: 'Baseline', baskit: '20–35% lower' },
    ],
    id: [
      { metric: 'Jangkauan Outlet', now: '500+ outlet', baskit: '1.500+ outlet' },
      { metric: 'Kecepatan Aktivasi', now: '2–3 minggu', baskit: '3–5 hari' },
      { metric: 'Efisiensi Biaya', now: 'Saat ini', baskit: '20–35% lebih rendah' },
    ],
  },
  earlyBuilder: {
    en: [
      { metric: 'Outlet Reach', now: '50–200 outlets', baskit: '500+ outlets' },
      { metric: 'Activation Speed', now: '3–4 weeks', baskit: '1 week' },
      { metric: 'Cost Efficiency', now: 'Baseline', baskit: '20–35% lower' },
    ],
    id: [
      { metric: 'Jangkauan Outlet', now: '50–200 outlet', baskit: '500+ outlet' },
      { metric: 'Kecepatan Aktivasi', now: '3–4 minggu', baskit: '1 minggu' },
      { metric: 'Efisiensi Biaya', now: 'Saat ini', baskit: '20–35% lebih rendah' },
    ],
  },
  cashConstrained: {
    en: [
      { metric: 'Outlet Reach', now: '100–300 outlets', baskit: '800+ outlets' },
      { metric: 'Cash Cycle', now: '45–60 days', baskit: '15–20 days' },
      { metric: 'Cost Efficiency', now: 'Baseline', baskit: '20–35% lower' },
    ],
    id: [
      { metric: 'Jangkauan Outlet', now: '100–300 outlet', baskit: '800+ outlet' },
      { metric: 'Siklus Cash', now: '45–60 hari', baskit: '15–20 hari' },
      { metric: 'Efisiensi Biaya', now: 'Saat ini', baskit: '20–35% lebih rendah' },
    ],
  },
  earlyStage: {
    en: [
      { metric: 'Outlet Reach', now: '<50 outlets', baskit: '200+ outlets' },
      { metric: 'Activation Speed', now: '4–6 weeks', baskit: '1–2 weeks' },
      { metric: 'Cost Efficiency', now: 'Baseline', baskit: '20–35% lower' },
    ],
    id: [
      { metric: 'Jangkauan Outlet', now: '<50 outlet', baskit: '200+ outlet' },
      { metric: 'Kecepatan Aktivasi', now: '4–6 minggu', baskit: '1–2 minggu' },
      { metric: 'Efisiensi Biaya', now: 'Saat ini', baskit: '20–35% lebih rendah' },
    ],
  },
  thinMargin: {
    en: [
      { metric: 'Outlet Reach', now: '200+ outlets', baskit: '600+ outlets' },
      { metric: 'Margin Health', now: '<15%', baskit: '20%+' },
      { metric: 'Cost Efficiency', now: 'Baseline', baskit: '20–35% lower' },
    ],
    id: [
      { metric: 'Jangkauan Outlet', now: '200+ outlet', baskit: '600+ outlet' },
      { metric: 'Kesehatan Margin', now: '<15%', baskit: '20%+' },
      { metric: 'Efisiensi Biaya', now: 'Saat ini', baskit: '20–35% lebih rendah' },
    ],
  },
  default: {
    en: [
      { metric: 'Outlet Reach', now: '100–300 outlets', baskit: '500+ outlets' },
      { metric: 'Activation Speed', now: '3–4 weeks', baskit: '1 week' },
      { metric: 'Cost Efficiency', now: 'Baseline', baskit: '20–35% lower' },
    ],
    id: [
      { metric: 'Jangkauan Outlet', now: '100–300 outlet', baskit: '500+ outlet' },
      { metric: 'Kecepatan Aktivasi', now: '3–4 minggu', baskit: '1 minggu' },
      { metric: 'Efisiensi Biaya', now: 'Saat ini', baskit: '20–35% lebih rendah' },
    ],
  },
}
