import Image from "next/image";
import { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
          {project.category === "smartfactory" ? "스마트팩토리" : project.category === "ai" ? "AI서비스" : "프로토타입"}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 mb-1">{project.title}</h3>
        <p className="text-sm text-gray-500 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs bg-gray-100 text-gray-500 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
