export default function Home() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        background: "#0f0f0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Badge */}
      <span
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#3a86ff",
          background: "rgba(58,134,255,0.12)",
          border: "1px solid rgba(58,134,255,0.25)",
          borderRadius: "999px",
          padding: "4px 12px",
          marginBottom: "24px",
        }}
      >
        Participatory Urban Design Research
      </span>

      {/* Title */}
      <h1
        style={{
          fontSize: "clamp(28px, 7vw, 42px)",
          fontWeight: 800,
          color: "#ffffff",
          margin: "0 0 8px 0",
          textAlign: "center",
          lineHeight: 1.1,
        }}
      >
        AR Scene Viewer
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "15px",
          color: "#888",
          margin: "0 0 12px 0",
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        Siegen-Feuersbach Community Project
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: "15px",
          color: "#aaa",
          margin: "0 0 40px 0",
          textAlign: "center",
          maxWidth: "320px",
          lineHeight: 1.6,
        }}
      >
        Point your camera at the ground and place community furniture in real
        space to explore urban design ideas together.
      </p>

      {/* Launch button */}
      <a
        href="/ar.html"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          background: "#3a86ff",
          color: "#fff",
          fontWeight: 700,
          fontSize: "17px",
          textDecoration: "none",
          borderRadius: "14px",
          padding: "18px 40px",
          minHeight: "56px",
          boxShadow: "0 4px 24px rgba(58,134,255,0.35)",
          transition: "transform 0.15s, box-shadow 0.15s",
          WebkitTapHighlightColor: "transparent",
        }}
        onMouseDown={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(0.97)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 2px 12px rgba(58,134,255,0.25)";
        }}
        onMouseUp={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 4px 24px rgba(58,134,255,0.35)";
        }}
      >
        <span style={{ fontSize: "20px" }}>📷</span>
        Launch AR
      </a>

      {/* Note */}
      <p
        style={{
          fontSize: "12px",
          color: "#555",
          marginTop: "24px",
          textAlign: "center",
          maxWidth: "280px",
          lineHeight: 1.5,
        }}
      >
        Requires camera access and HTTPS. Best on iOS Safari or Android Chrome.
      </p>
    </main>
  );
}
