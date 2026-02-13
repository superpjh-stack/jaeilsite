import { Trophy } from "lucide-react";
import { awards } from "@/data/company";

export default function AwardCard() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
          수상경력
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award) => (
            <div
              key={award.title}
              className="p-6 bg-gray-50 rounded-xl text-center"
            >
              <Trophy
                className="text-yellow-500 mx-auto mb-4"
                size={36}
                strokeWidth={1.5}
              />
              <h3 className="font-bold text-gray-900 mb-1">{award.title}</h3>
              <p className="text-sm text-gray-500 mb-1">
                {award.organization}
              </p>
              <p className="text-xs text-gray-400">{award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
