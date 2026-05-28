import { Download } from 'lucide-react'

export default function DownloadReportButton() {
  return (
    <button
      onClick={() => window.print()}
      className="pdf-exclude no-print absolute right-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#E8DDD0] bg-white/70 text-[#5B4A3B] backdrop-blur-sm transition-all duration-200 hover:bg-[#FAF7F2] hover:border-[#D9CCBD]"
      aria-label="Download report"
      title="Download Report"
      type="button"
    >
      <Download size={17} strokeWidth={1.75} />
    </button>
  )
}
