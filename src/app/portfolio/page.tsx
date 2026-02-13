import type { Metadata } from "next";
import PortfolioContent from "@/components/portfolio/PortfolioContent";

export const metadata: Metadata = {
  title: "포트폴리오",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-[70px]">
        <div className="bg-gray-50 py-12 sm:py-20 text-center px-5">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">포트폴리오</h1>
          <p className="text-gray-500 text-sm sm:text-base">
            우리가 만들어 온 프로젝트들을 소개합니다
          </p>
        </div>
      </section>

      <PortfolioContent />
    </>
  );
}
