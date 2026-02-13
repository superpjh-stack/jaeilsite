"use client";

import { useEffect, useRef } from "react";
import { Factory, Code, Brain } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Factory,
    title: "SMART FACTORY",
    description:
      "MES, ERP, FEMS, WMS 서비스 솔루션으로 제조기업의 생산 및 품질관리를 체계적으로 지원합니다.",
    tags: ["MES", "ERP", "FEMS", "WMS"],
  },
  {
    icon: Brain,
    title: "AI SERVICE",
    description:
      "AI Agent와 머신러닝 기술을 활용하여 기업의 지능형 자동화 및 데이터 기반 의사결정을 지원합니다.",
    tags: ["AI Agent", "머신러닝"],
  },
  {
    icon: Code,
    title: "PROTOTYPE",
    description:
      "WEB, APP, 시제품 제작을 통해 기업의 신규 서비스 런칭을 위한 토탈 서비스를 제공합니다.",
    tags: ["WEB", "APP", "시제품"],
  },
];

export default function ServiceSection() {
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
    <section className="py-20 bg-white" ref={ref}>
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-14 scroll-reveal">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            우리의 서비스
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            재일은 제조업의 디지털 전환과 AI 혁신을 위한 토탈 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/portfolio"
              className="group block p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 scroll-reveal"
            >
              <service.icon
                className="text-primary-500 mb-6"
                size={48}
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
