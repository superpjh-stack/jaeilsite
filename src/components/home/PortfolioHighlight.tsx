import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function PortfolioHighlight() {
  const highlighted = projects.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            포트폴리오
          </h2>
          <p className="text-gray-500">우리가 만들어 온 대표 프로젝트</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlighted.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
                  {project.category === "smartfactory"
                    ? "스마트팩토리"
                    : project.category === "ai"
                    ? "AI서비스"
                    : "프로토타입"}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-primary-500 font-medium hover:text-primary-600 transition-colors"
          >
            전체 포트폴리오 보기 <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
