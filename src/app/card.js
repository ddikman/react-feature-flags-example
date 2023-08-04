export default function Card({ children }) {
  return <div className="rounded-lg bg-white shadow-black/5 ring-1 ring-slate-700/10 p-4 mb-4 break-inside-avoid-column">
    {children}
  </div>
}