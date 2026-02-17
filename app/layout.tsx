import type { Metadata } from "next";
import { Xanh_Mono, IBM_Plex_Mono,Kalam} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const xanhmono = Xanh_Mono({
  variable: "--font-xanhMono",
  weight: "400",
  subsets: ["latin"],
  style: ["italic"],
});

const ibmplexmono = IBM_Plex_Mono({
  variable: "--font-ibmPlexMono",
  weight: ["300", "400"],
  subsets: ["latin"],
  style: "normal",
});

const kalam = Kalam({
  variable: "--font-kalam",
  weight: ["300", "400"],
  subsets: ["latin"],
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prajwalbm.vercel.app/'),
  title: 'Prajwal B M',
  description: 'Know me better as a developer.',
  openGraph: {
    url: 'https://prajwalbm.vercel.app/',
    siteName: 'Prajwal B M Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/open-graph.png',
      width: 1200,
      height: 630,
      alt: 'Prajwal B M Portfolio'
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${xanhmono.variable} ${ibmplexmono.className} ${kalam.variable}  antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
