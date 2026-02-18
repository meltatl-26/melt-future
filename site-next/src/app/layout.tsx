import type { Metadata } from "next";
import { VersionProvider } from "@/lib/version-context";
import { VersionLayout } from "@/components/shared/VersionLayout";
import "@/styles/shared/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meltatl.com"),
  title: {
    default: "MELT Atlanta | Experiential Marketing Agency",
    template: "%s | MELT Atlanta",
  },
  description: "26 years of experiential marketing execution. Events, sampling, sponsorships, and more. 10,000+ events. Atlanta-based.",
  keywords: ["experiential marketing", "event marketing", "sampling programs", "sponsorship activation", "Atlanta marketing agency", "MELT Atlanta"],
  authors: [{ name: "MELT Atlanta" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MELT Atlanta",
    title: "MELT Atlanta | Experiential Marketing Agency",
    description: "26 years of experiential marketing execution. 10,000+ events. Atlanta-based.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "MELT Atlanta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MELT Atlanta | Experiential Marketing Agency",
    description: "26 years of experiential marketing execution. 10,000+ events. Atlanta-based.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fonts: Industry (TypeKit) + Satoshi (Fontshare) */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/clv7xin.css" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap" />
      </head>
      <body>
        <VersionProvider>
          <VersionLayout>
            {children}
          </VersionLayout>
        </VersionProvider>
      </body>
    </html>
  );
}
