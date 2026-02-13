export const COMPANY = {
  name: "주식회사 재일",
  nameEn: "JAEIL",
  ceo: "김형미",
  businessNumber: "642-81-02058",
  corporateNumber: "210111-0154684",
  address: "전북특별자치도 전주시 덕진구 권삼득로 333, 3층 304호(덕진동 1가)",
  phone: "010-9164-6312",
  privacyOfficer: "김형미",
  copyright: "© THE JAEIL ALL RIGHTS RESERVED.",
} as const;

export const NAV_ITEMS = [
  { label: "홈", href: "/" },
  { label: "포트폴리오", href: "/portfolio" },
  { label: "회사소개", href: "/about" },
  { label: "문의", href: "/contact" },
] as const;
