export default function ProgressBar({ current, total }) {
  const pct = (current / total) * 100

  return (
    <div className="w-full bg-[#E2DDD5] rounded-full h-1.5">
      <div
        className="bg-[#085B59] rounded-full h-1.5 transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
