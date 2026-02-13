export const stats = [
  { label: "프로젝트 수", value: 100, suffix: "+" },
  { label: "고객사 수", value: 50, suffix: "+" },
  { label: "서비스 영역", value: 3, suffix: "+" },
  { label: "경력 연수", value: 15, suffix: "+" },
];

export interface TimelineItem {
  year: string;
  events: string[];
}

export const timeline: TimelineItem[] = [
  { year: "2026", events: ["스마트팩토리 및 AI 프로젝트 제안참여"] },
  { year: "2025", events: ["스마트팩토리 프로젝트 참여"] },
  { year: "2024", events: ["스마트공방 프로젝트 수행"] },
];

export interface Award {
  title: string;
  organization: string;
  year: string;
}

export const awards: Award[] = [
  { title: "스마트팩토리 우수 공급기업", organization: "중소벤처기업부", year: "2024" },
  { title: "ICT 혁신기업 인증", organization: "과학기술정보통신부", year: "2023" },
  { title: "전주시 유망 중소기업", organization: "전주시", year: "2023" },
];
