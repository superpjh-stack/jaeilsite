"use client";

import { useEffect, useRef } from "react";
import { Target, Lightbulb } from "lucide-react";

export default function VisionMission() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    const els = ref.current?.querySelectorAll(".scroll-reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20" ref={ref}>
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex gap-5 scroll-reveal">
            <div className="shrink-0 w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center">
              <Target className="text-primary-500" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">비전</h3>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                제조업의 디지털 전환을 선도하는 기업.
                스마트팩토리, AI 서비스, 프로토타입 솔루션을 통해
                대한민국 제조업의 경쟁력을 높이겠습니다.
              </p>
            </div>
          </div>

          <div className="flex gap-5 scroll-reveal">
            <div className="shrink-0 w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center">
              <Lightbulb className="text-primary-500" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">미션</h3>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                MES, ERP 등 스마트팩토리 솔루션과 AI 기술, 프로토타입 제작을 통해
                제조기업의 생산성 향상과 신규 서비스 런칭에 기여합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
