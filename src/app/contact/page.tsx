import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "문의",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "주소",
    value: COMPANY.address,
  },
  {
    icon: Phone,
    label: "전화",
    value: COMPANY.phone,
  },
  {
    icon: Mail,
    label: "이메일",
    value: "superpjh@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-[70px]">
        <div className="bg-gray-50 py-12 sm:py-20 text-center px-5">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">문의</h1>
          <p className="text-gray-500 text-sm sm:text-base">프로젝트에 대해 문의해 주세요</p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
            {/* Form */}
            <ContactForm />

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex gap-4 p-4 sm:p-5 bg-gray-50 rounded-xl"
                >
                  <div className="shrink-0 w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                    <info.icon className="text-primary-500" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {info.label}
                    </p>
                    <p className="text-sm text-gray-500 mt-0.5 break-words">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-10 sm:pb-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">오시는 길</h2>
          <div className="w-full h-[280px] sm:h-[400px] bg-gray-100 rounded-xl overflow-hidden">
            <iframe
              src="https://map.kakao.com/?urlX=919944&urlY=543155&name=%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84+%EC%A0%84%EC%A3%BC%EC%8B%9C+%EB%8D%95%EC%A7%84%EA%B5%AC+%EA%B6%8C%EC%82%BC%EB%93%9D%EB%A1%9C+333"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="재일 위치"
            />
          </div>
        </div>
      </section>
    </>
  );
}
