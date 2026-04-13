"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-primary-600 noise-overlay" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight reveal">
          디지털 전환의 첫 걸음을<br />지금 시작하세요
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto reveal" style={{ transitionDelay: "0.1s" }}>
          재일은 제조업의 스마트팩토리 구축부터 AI 도입, 프로토타입 개발까지<br />
          기업의 모든 디지털 혁신을 함께합니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal" style={{ transitionDelay: "0.2s" }}>
          <Link
            href="/contact"
            className="px-10 py-5 bg-white text-primary-700 rounded-2xl font-bold text-lg transition-all hover:scale-[1.03] shadow-2xl"
          >
            문의하기
          </Link>
          <Link
            href="/portfolio"
            className="px-10 py-5 bg-primary-700/30 text-white border border-white/20 rounded-2xl font-bold text-lg backdrop-blur-md hover:bg-primary-700/50 transition-all"
          >
            포트폴리오 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
