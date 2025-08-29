import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#16a34a,#065f46)",
          color: "white",
          fontSize: 72,
          fontWeight: 800,
          letterSpacing: -1,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1000, padding: 40 }}>
          <div style={{ fontSize: 28, opacity: 0.9, marginBottom: 16 }}>
            Гундырев — партнер Dr.Web
          </div>
          <div>Надежная защита от вирусов и киберугроз</div>
          <div style={{ fontSize: 28, marginTop: 20, opacity: 0.9 }}>
            Российский антивирус • ФСТЭК • ФСБ
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

