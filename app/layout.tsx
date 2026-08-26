import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jie Sheng — AI Engineer",
  description:
    "Resume and portfolio of Jie Sheng, an AI and data engineer building production LLM systems, data platforms, APIs and cloud-delivered decision tools.",
  icons: {
    icon: "/headshot.png",
  },
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
