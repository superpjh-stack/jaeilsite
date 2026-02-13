import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://jaeil-homepage-419291531449.asia-northeast3.run.app"
  ),
  title: {
    default: "주식회사 재일 | 스마트팩토리 & AI서비스 & 프로토타입 솔루션",
    template: "%s | 주식회사 재일",
  },
  description:
    "제조기업의 디지털 전환을 위한 MES, ERP, FEMS, WMS 스마트팩토리 솔루션과 AI Agent, 머신러닝 AI 서비스, WEB, APP 프로토타입 제작 서비스",
  keywords: ["스마트팩토리", "MES", "ERP", "AI Agent", "머신러닝", "프로토타입", "시제품", "전주", "재일"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "주식회사 재일",
    title: "주식회사 재일 | 스마트팩토리 & AI서비스 & 프로토타입 솔루션",
    description:
      "제조기업의 디지털 전환과 AI 혁신을 위한 토탈 솔루션",
    url: "https://jaeil-homepage-419291531449.asia-northeast3.run.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "주식회사 재일 | 스마트팩토리 & AI서비스 & 프로토타입 솔루션",
    description:
      "제조기업의 디지털 전환과 AI 혁신을 위한 토탈 솔루션",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className={`${notoSansKR.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
