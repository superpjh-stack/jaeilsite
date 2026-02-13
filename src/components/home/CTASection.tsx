import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          프로젝트를 시작하세요
        </h2>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">
          재일과 함께 디지털 전환의 첫 걸음을 내딛어 보세요
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-600 hover:shadow-lg transition-all"
        >
          문의하기
        </Link>
      </div>
    </section>
  );
}
