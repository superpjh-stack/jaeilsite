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
    bg: "from-blue-900 to-blue-700",
  },
  {
    title: "AI SERVICE",
    subtitle:
      "AI Agent와 머신러닝 기술을 활용하여\n기업의 지능형 자동화 및 데이터 기반 의사결정을 지원합니다",
    image: "/images/hero-smartfactory.jpg",
    link: "/portfolio",
    bg: "from-violet-900 to-violet-700",
  },
  {
    title: "PROTOTYPE",
    subtitle:
      "WEB, APP, 시제품 제작 솔루션을 통해\n기업의 신규 서비스 런칭을 위한 토탈 서비스를 제공합니다",
    image: "/images/hero-prototype.jpg",
    link: "/portfolio",
    bg: "from-gray-900 to-gray-700",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const next = useCallback(
    () => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setAnimKey((prev) => prev + 1);
    },
    []
  );

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAnimKey((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[calc(100svh)] min-h-[500px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background: image with gradient fallback */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg}`} />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-5">
        <div key={animKey} className="animate-fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-heading tracking-wider mb-4 sm:mb-6">
            {slides[current].title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/80 whitespace-pre-line leading-relaxed mb-6 sm:mb-10 max-w-2xl mx-auto">
            {slides[current].subtitle}
          </p>
          <Link
            href={slides[current].link}
            className="inline-block border-2 border-white px-8 py-3 text-sm font-medium rounded hover:bg-white hover:text-gray-900 transition-colors"
          >
            자세히 보기
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/60 hover:text-white transition-colors"
        aria-label="이전"
      >
        <ChevronLeft size={36} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/60 hover:text-white transition-colors"
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
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`슬라이드 ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
