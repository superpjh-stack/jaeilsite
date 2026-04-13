import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">JAEIL</span>
            </Link>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-6 text-sm">
              재일은 스마트팩토리, AI 서비스, 프로토타입 개발로 제조업의 디지털 전환과 AI 혁신을 이끄는 기술 기업입니다.
            </p>
            <div className="text-xs text-slate-400 leading-6 space-y-0.5">
              <p>{COMPANY.name} | 대표: {COMPANY.ceo}</p>
              <p>사업자등록번호: {COMPANY.businessNumber}</p>
              <p>주소: {COMPANY.address}</p>
              <p>전화: {COMPANY.phone}</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-bold text-slate-900 mb-6 text-sm">서비스</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link href="/portfolio" className="hover:text-primary-600 transition-colors">스마트팩토리</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary-600 transition-colors">AI 서비스</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary-600 transition-colors">프로토타입 개발</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary-600 transition-colors">포트폴리오</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-bold text-slate-900 mb-6 text-sm">회사</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link href="/about" className="hover:text-primary-600 transition-colors">회사소개</Link></li>
              <li><Link href="/about" className="hover:text-primary-600 transition-colors">연혁</Link></li>
              <li><Link href="/contact" className="hover:text-primary-600 transition-colors">문의하기</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">{COMPANY.copyright}</p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <Link href="/contact" className="hover:text-slate-900 transition-colors">개인정보처리방침</Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
