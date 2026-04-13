"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ServiceSection() {
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
    <section id="services" className="py-32 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <p className="text-primary-600 font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Core Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            제조업을 위한 가장 완벽한 솔루션
          </h2>
          <p className="text-lg text-slate-500">
            단순한 시스템 구축을 넘어, 기업의 모든 데이터를 연결하고 실행 가능한 인사이트를 도출합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Feature Card - Smart Factory */}
          <div className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 group reveal">
            <div className="flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">스마트팩토리</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
                MES, ERP, FEMS, WMS 통합 솔루션으로 제조기업의 생산·품질관리를 체계적으로 혁신합니다.
                반복 업무를 자동화하고 실시간 데이터로 최적화된 의사결정을 지원합니다.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["MES", "ERP", "FEMS", "WMS"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-bold bg-primary-50 text-primary-600 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/portfolio"
                className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors"
              >
                사례 보기
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Dark Card - AI Service */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-900/20 group reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI 서비스</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              AI Agent와 머신러닝으로 기업의 지능형 자동화 및 데이터 기반 의사결정을 지원합니다.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <svg className="w-4 h-4 text-primary-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                AI Agent 자동화
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <svg className="w-4 h-4 text-primary-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                머신러닝 분석
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <svg className="w-4 h-4 text-primary-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                실시간 인사이트
              </li>
            </ul>
          </div>

          {/* Small Card - Prototype */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 group reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">프로토타입</h3>
            <p className="text-slate-500 leading-relaxed">
              WEB, APP, 시제품 제작으로 신규 서비스 런칭을 위한 토탈 솔루션을 제공합니다.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["WEB", "APP", "시제품"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-bold bg-purple-50 text-purple-600 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Wide Gradient Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-primary-600 to-indigo-700 rounded-[2.5rem] p-10 text-white group reveal" style={{ transitionDelay: "0.3s" }}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">데이터 기반 스마트 제조</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  현장 데이터를 실시간으로 수집·분석하여 생산 효율을 극대화하고 불량률을 최소화합니다. 15년 이상의 경험으로 검증된 솔루션을 제공합니다.
                </p>
              </div>
              <div className="relative">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md border border-white/20">
                  <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-4">생산 효율 향상</p>
                  <div className="flex justify-between items-end gap-2 h-28">
                    <div className="flex flex-col items-center gap-1 w-full">
                      <div className="w-full bg-white/30 rounded-t-lg" style={{ height: "40%" }} />
                      <span className="text-xs text-blue-200">Q1</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 w-full">
                      <div className="w-full bg-white/30 rounded-t-lg" style={{ height: "60%" }} />
                      <span className="text-xs text-blue-200">Q2</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 w-full">
                      <div className="w-full bg-white/30 rounded-t-lg" style={{ height: "75%" }} />
                      <span className="text-xs text-blue-200">Q3</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 w-full">
                      <div className="w-full bg-blue-200 rounded-t-lg" style={{ height: "100%" }} />
                      <span className="text-xs text-blue-200">Q4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
