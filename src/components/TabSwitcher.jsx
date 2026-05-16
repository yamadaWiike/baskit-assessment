export default function TabSwitcher({ tabs, active, onChange }) {
  return (
    <div className="inline-flex bg-[#F5F2EC] rounded-full p-1 mb-7">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`px-5 py-2 rounded-full text-[13.5px] font-medium cursor-pointer transition-all ${
            active === tab.value
              ? 'bg-white text-[#FF8B00] font-bold shadow-sm'
              : 'text-[#9B9CA1] hover:text-[#4C4F59]'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
