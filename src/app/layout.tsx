import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rillation Revenue | Revenue Infrastructure for B2B",
  description: "Strategic execution partner building revenue infrastructure for B2B organizations through content, outbound, LinkedIn, and paid ads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
