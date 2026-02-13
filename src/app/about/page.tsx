import type { Metadata } from "next";
import VisionMission from "@/components/about/VisionMission";
import Timeline from "@/components/about/Timeline";

export const metadata: Metadata = {
  title: "회사소개",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-[70px]">
        <div className="bg-gray-50 py-20 text-center px-5">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">회사 소개</h1>
          <p className="text-gray-500 text-sm sm:text-base">주식회사 재일을 소개합니다</p>
        </div>
      </section>

      <VisionMission />
      <Timeline />
    </>
  );
}
