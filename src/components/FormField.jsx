export default function FormField({
  label,
  type = 'text',
  value,
  onChange,
  error,
  required,
  placeholder,
  options, // for select: [{ value, label }]
  rows,    // for textarea
}) {
  const base =
    'w-full border rounded-xl px-4 py-3 text-[#383B46] text-sm focus:outline-none transition bg-white font-sans'
  const borderCls = error
    ? 'border-red-400 focus:border-red-400'
    : 'border-[#E2DDD5] focus:border-[#FF8B00]'

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-bold text-[#9B9CA1] uppercase tracking-[1.5px]">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>

      {type === 'select' ? (
        <div className="relative">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${base} ${borderCls} appearance-none cursor-pointer pr-10`}
          >
            <option value="">{placeholder || 'Select…'}</option>
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-[#9B9CA1]"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      ) : type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows || 4}
          className={`${base} ${borderCls} resize-none placeholder:text-[#9B9CA1]`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${base} ${borderCls} placeholder:text-[#9B9CA1]`}
        />
      )}

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}
