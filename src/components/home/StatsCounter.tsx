"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/company";

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, isVisible]);

  return count;
}

function StatItem({
  label,
  value,
  suffix,
  isVisible,
  delay,
}: {
  label: string;
  value: number;
  suffix: string;
  isVisible: boolean;
  delay: string;
}) {
  const count = useCountUp(value, isVisible);

  return (
    <div
      className={`text-center reveal ${isVisible ? "active" : ""}`}
      style={{ transitionDelay: delay }}
    >
      <div className="text-5xl font-bold text-slate-900 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-slate-400 font-semibold uppercase tracking-widest text-xs">
        {label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const delays = ["0s", "0.1s", "0.2s", "0.3s"];

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              isVisible={isVisible}
              delay={delays[i] ?? "0s"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
