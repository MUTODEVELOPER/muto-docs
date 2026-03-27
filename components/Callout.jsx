export default function Callout({ title, children }) {
  return (
    <div className="my-6 rounded-2xl border border-[var(--muto-border)] bg-[var(--muto-panel)] p-5">
      {title ? <div className="mb-2 text-sm font-semibold text-[#f3ba2f]">{title}</div> : null}
      <div className="text-sm text-neutral-300">{children}</div>
    </div>
  )
}
