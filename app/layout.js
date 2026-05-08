import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
});

export const metadata = {
  title: "OmniKit - One SDK for every chain, every wallet",
  description: "OmniKit unifies wallet connection, authentication, and transaction handling across Ethereum and Solana. Stop writing the same code twice. Open source multi-chain wallet infrastructure SDK by WatchUp LTD.",
  keywords: ["wallet", "ethereum", "solana", "web3", "blockchain", "SDK", "multi-chain", "crypto", "DeFi", "authentication"],
  authors: [{ name: "WatchUp LTD" }],
  creator: "WatchUp LTD",
  publisher: "WatchUp LTD",
  metadataBase: new URL("https://omnikit.watchup.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OmniKit - One SDK for every chain, every wallet",
    description: "OmniKit unifies wallet connection, authentication, and transaction handling across Ethereum and Solana. Stop writing the same code twice.",
    url: "https://omnikit.watchup.site",
    siteName: "OmniKit",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniKit - One SDK for every chain, every wallet",
    description: "OmniKit unifies wallet connection, authentication, and transaction handling across Ethereum and Solana. Stop writing the same code twice.",
    creator: "@watchup_ltd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "OmniKit",
    "description": "OmniKit unifies wallet connection, authentication, and transaction handling across Ethereum and Solana. Stop writing the same code twice.",
    "url": "https://omnikit.watchup.site",
    "author": {
      "@type": "Organization",
      "name": "WatchUp LTD"
    },
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#080808" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
