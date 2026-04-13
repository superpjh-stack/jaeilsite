"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "SMART FACTORY",
    subtitle:
      "제조기업의 생산 및 품질관리를 위해\nMES, ERP, FEMS, WMS 서비스 솔루션을 제공합니다",
    image: "/images/hero-smartfactory.jpg",
    link: "/portfolio",
    bg: "from-blue-950 to-blue-800",
    badge: "스마트팩토리 솔루션",
    stat: { value: "100+", label: "완료 프로젝트" },
  },
  {
    title: "AI SERVICE",
    subtitle:
      "AI Agent와 머신러닝 기술을 활용하여\n기업의 지능형 자동화 및 데이터 기반 의사결정을 지원합니다",
    image: "/images/hero-smartfactory.jpg",
    link: "/portfolio",
    bg: "from-violet-950 to-violet-800",
    badge: "AI 기반 자동화",
    stat: { value: "50+", label: "고객사" },
  },
  {
    title: "PROTOTYPE",
    subtitle:
      "WEB, APP, 시제품 제작 솔루션을 통해\n기업의 신규 서비스 런칭을 위한 토탈 서비스를 제공합니다",
    image: "/images/hero-prototype.jpg",
    link: "/portfolio",
    bg: "from-slate-950 to-slate-800",
    badge: "빠른 프로토타이핑",
    stat: { value: "15+", label: "경력 연수" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAnimKey((prev) => prev + 1);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAnimKey((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[calc(100svh)] min-h-[600px] overflow-hidden noise-overlay">
      {/* Background layers */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover"
            priority={i === 0}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${s.bg} opacity-90`} />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Decorative blobs */}
      <div className="absolute top-[15%] left-[5%] w-64 h-64 bg-blue-400/10 rounded-full blur-[80px] animate-pulse-soft pointer-events-none" />
      <div className="absolute bottom-[15%] right-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-[100px] animate-pulse-soft pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div key={animKey} className="animate-fade-up text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-bold mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
              {slide.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              {slide.title.split(" ")[0]}{" "}
              <span className="text-gradient-primary">
                {slide.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/75 whitespace-pre-line leading-relaxed mb-10 max-w-xl">
              {slide.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href={slide.link}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] shadow-2xl shadow-black/20"
              >
                자세히 보기
                <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-bold text-sm backdrop-blur-sm transition-all hover:bg-white/20"
              >
                문의하기
              </Link>
            </div>

            {/* Stat badges */}
            <div className="mt-14 pt-8 border-t border-white/15 flex flex-wrap items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-white">{slide.stat.value}</p>
                <p className="text-xs text-white/50">{slide.stat.label}</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-xs text-white/50">기술 지원</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-xs text-white/50">서비스 안정성</p>
              </div>
            </div>
          </div>

          {/* Right: Floating card (desktop only) */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative">
              {/* Main card */}
              <div className="glass-card-light rounded-[2rem] p-8 w-72 shadow-2xl animate-float">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">프로젝트 현황</p>
                      <p className="text-xl font-bold text-slate-900">100+ 완료</p>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-blue-600 rounded-full" />
                  </div>
                  <p className="text-xs text-slate-400">스마트팩토리 · AI · 프로토타입</p>
                </div>
              </div>

              {/* Secondary card */}
              <div className="absolute -top-10 -right-10 glass-card-light p-5 rounded-2xl shadow-xl animate-float" style={{ animationDelay: "-2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">고객 만족도</p>
                    <p className="text-lg font-bold text-slate-900">98%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/50 hover:text-white transition-colors"
        aria-label="이전"
      >
        <ChevronLeft size={36} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/50 hover:text-white transition-colors"
        aria-label="다음"
      >
        <ChevronRight size={36} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              setAnimKey((prev) => prev + 1);
            }}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "bg-white w-8 h-3" : "bg-white/40 w-3 h-3"
            }`}
            aria-label={`슬라이드 ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
