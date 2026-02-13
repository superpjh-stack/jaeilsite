import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "주식회사 재일 | 스마트팩토리 & AI서비스 & 프로토타입 솔루션";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #1E40AF 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            opacity: 0.08,
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 300,
                height: 300,
                borderRadius: "50%",
                border: "2px solid white",
                top: i % 2 === 0 ? -50 : 350,
                left: i * 220 - 100,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            padding: "60px 80px",
            position: "relative",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 800,
              color: "white",
              letterSpacing: "0.15em",
              marginBottom: 24,
            }}
          >
            JAEIL
          </div>

          {/* Company name */}
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(255,255,255,0.9)",
              marginBottom: 48,
              fontWeight: 500,
            }}
          >
            주식회사 재일
          </div>

          {/* Service tags */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 48,
            }}
          >
            {["SMART FACTORY", "AI SERVICE", "PROTOTYPE"].map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  padding: "12px 28px",
                  borderRadius: 50,
                  border: "2px solid rgba(255,255,255,0.5)",
                  color: "white",
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  background: "rgba(255,255,255,0.1)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Description */}
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              lineHeight: 1.6,
              maxWidth: 700,
            }}
          >
            제조기업의 디지털 전환과 AI 혁신을 위한 토탈 솔루션
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 80px",
            background: "rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 14,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            전북특별자치도 전주시 덕진구 권삼득로 333, 3층 304호
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 14,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            superpjh@gmail.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
