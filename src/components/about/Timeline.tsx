import { timeline } from "@/data/company";

export default function Timeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
          연혁
        </h2>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-200" />

          <div className="space-y-10">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-6">
                {/* Dot */}
                <div className="shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold z-10">
                  {item.year.slice(-2)}
                </div>

                <div>
                  <p className="text-lg font-bold text-gray-900 mb-2">
                    {item.year}
                  </p>
                  <ul className="space-y-1">
                    {item.events.map((event, i) => (
                      <li key={i} className="text-gray-500 text-sm">
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
