import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AR Scene Viewer — Siegen-Feuersbach Community Project",
  description:
    "Participatory urban design research tool. Place 3D models of community furniture in real space using your phone camera.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
