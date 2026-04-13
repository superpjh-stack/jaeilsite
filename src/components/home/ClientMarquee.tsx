const clients = [
  "중소벤처기업부",
  "전라북도",
  "전주시",
  "KOTRA",
  "한국산업기술진흥원",
  "스마트제조혁신추진단",
];

export default function ClientMarquee() {
  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
          함께하는 파트너
        </p>
      </div>
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-20 px-10">
          {clients.map((name) => (
            <span key={name} className="text-2xl font-black text-slate-200 hover:text-slate-400 transition-colors cursor-default">
              {name}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-20 px-10">
          {clients.map((name) => (
            <span key={`${name}-dup`} className="text-2xl font-black text-slate-200 hover:text-slate-400 transition-colors cursor-default">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
