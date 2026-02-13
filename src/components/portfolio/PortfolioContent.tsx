"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import CategoryFilter from "@/components/portfolio/CategoryFilter";
import ProjectCard from "@/components/portfolio/ProjectCard";

export default function PortfolioContent() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200px] px-5">
        <CategoryFilter selected={filter} onSelect={setFilter} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="transition-all duration-300"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
