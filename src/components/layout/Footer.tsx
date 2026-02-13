import { COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 sm:py-12">
      <div className="mx-auto max-w-[1200px] px-5">
        <p className="text-white text-lg sm:text-xl font-bold tracking-wider mb-4 sm:mb-6">
          JAEIL
        </p>

        <div className="text-xs sm:text-sm leading-6 sm:leading-7 break-words">
          <p>
            {COMPANY.name} | 대표: {COMPANY.ceo}
          </p>
          <p>사업자등록번호: {COMPANY.businessNumber}</p>
          <p>주소: {COMPANY.address}</p>
          <p>전화: {COMPANY.phone}</p>
          <p>이메일: superpjh@gmail.com</p>
        </div>

        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800 text-xs text-gray-500">
          {COMPANY.copyright}
        </div>
      </div>
    </footer>
  );
}
