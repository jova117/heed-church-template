import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overflow Church Network - HEED Church OS Demo",
  description: "Experience the Overflow Church Network demo showcasing HEED Church OS with Mars-themed content and enhanced automation.",
  keywords: ["church", "demo", "overflow", "heed", "mars", "space"],
  authors: [{ name: "HEED" }],
  creator: "HEED",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/jova117/heed-church-os",
    siteName: "Overflow Church Network",
    title: "Overflow Church Network - HEED Church OS Demo",
    description: "Experience the Overflow Church Network demo showcasing HEED Church OS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overflow Church Network - HEED Church OS Demo",
    description: "Experience the Overflow Church Network demo showcasing HEED Church OS.",
  },
};

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Preload critical hero image */}
      <link
        rel="preload"
        as="image"
        href="/sunrise.jpg"
        type="image/jpeg"
      />
      {children}
    </>
  );
}
