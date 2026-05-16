export default function OptionButton({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-xl px-4 py-4 transition cursor-pointer border text-sm min-h-[56px] ${
        selected
          ? 'border-[#FF8B00] bg-[#FF8B00]/8 text-[#383B46] font-medium'
          : 'border-[#E2DDD5] text-[#4C4F59] hover:border-[#FF8B00]'
      }`}
    >
      {label}
    </button>
  )
}
