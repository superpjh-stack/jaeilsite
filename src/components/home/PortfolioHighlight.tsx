"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects } from "@/data/portfolio";

const categoryMap: Record<string, string> = {
  smartfactory: "스마트팩토리",
  ai: "AI서비스",
  prototype: "프로토타입",
};

export default function PortfolioHighlight() {
  const highlighted = projects.slice(0, 3);
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
    <section className="py-32 bg-slate-950 relative overflow-hidden noise-overlay" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal">
          <p className="text-primary-400 font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            우리가 만들어 온 대표 프로젝트
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            재일의 기술력으로 완성한 스마트팩토리, AI, 프로토타입 프로젝트를 확인하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlighted.map((project, i) => (
            <div
              key={project.id}
              className="glass-panel rounded-[2.5rem] overflow-hidden group hover:bg-white/5 transition-all duration-500 reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-bold bg-primary-600 text-white rounded-full">
                  {categoryMap[project.category] ?? project.category}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-white text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-sm hover:scale-[1.02] transition-all shadow-2xl"
          >
            전체 포트폴리오 보기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
