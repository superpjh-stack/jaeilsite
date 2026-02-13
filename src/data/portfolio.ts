export interface Project {
  id: string;
  title: string;
  description: string;
  category: "smartfactory" | "ai" | "prototype";
  thumbnail: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "sf-mes-01",
    title: "A사 MES 구축",
    description: "생산 실적 관리 및 품질 추적 시스템 구축",
    category: "smartfactory",
    thumbnail: "/images/portfolio/placeholder.svg",
    tags: ["MES", "생산관리"],
  },
  {
    id: "sf-erp-01",
    title: "B사 ERP 시스템",
    description: "통합 자원 관리 시스템 도입 및 커스터마이징",
    category: "smartfactory",
    thumbnail: "/images/portfolio/placeholder.svg",
    tags: ["ERP", "자원관리"],
  },
  {
    id: "sf-fems-01",
    title: "C사 FEMS 에너지 관리",
    description: "공장 에너지 모니터링 및 최적화 시스템",
    category: "smartfactory",
    thumbnail: "/images/portfolio/placeholder.svg",
    tags: ["FEMS", "에너지"],
  },
  {
    id: "ai-agent-01",
    title: "AI Agent 자동화 시스템",
    description: "AI Agent를 활용한 업무 프로세스 자동화 솔루션",
    category: "ai",
    thumbnail: "/images/portfolio/placeholder.svg",
    tags: ["AI Agent", "자동화"],
  },
  {
    id: "ai-ml-01",
    title: "머신러닝 품질 예측",
    description: "머신러닝 기반 제조 품질 예측 및 분석 시스템",
    category: "ai",
    thumbnail: "/images/portfolio/placeholder.svg",
    tags: ["머신러닝", "품질예측"],
  },
  {
    id: "pt-web-01",
    title: "D사 웹 서비스 개발",
    description: "B2B 플랫폼 웹 애플리케이션 기획 및 개발",
    category: "prototype",
    thumbnail: "/images/portfolio/placeholder.svg",
    tags: ["WEB", "플랫폼"],
  },
  {
    id: "pt-app-01",
    title: "E사 모바일 앱",
    description: "IoT 기반 설비 모니터링 모바일 앱 개발",
    category: "prototype",
    thumbnail: "/images/portfolio/placeholder.svg",
    tags: ["APP", "IoT"],
  },
  {
    id: "pt-proto-01",
    title: "F사 시제품 제작",
    description: "신규 서비스 런칭을 위한 MVP 시제품 제작",
    category: "prototype",
    thumbnail: "/images/portfolio/placeholder.svg",
    tags: ["시제품", "MVP"],
  },
];

export const categories = [
  { key: "all" as const, label: "전체" },
  { key: "smartfactory" as const, label: "스마트팩토리" },
  { key: "ai" as const, label: "AI서비스" },
  { key: "prototype" as const, label: "프로토타입" },
];
