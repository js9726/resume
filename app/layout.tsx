import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jie Sheng — Full-Stack & AI Engineer",
  description:
    "Resume and project portfolio of Jie Sheng, a full-stack and AI engineer building production web apps and LLM/agent systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
