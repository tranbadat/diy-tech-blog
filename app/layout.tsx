import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DIY Tech Blog - Dự án công nghệ cho học sinh, sinh viên",
  description: "Blog chia sẻ các dự án DIY về công nghệ, Arduino, Raspberry Pi và lập trình cho học sinh, sinh viên.",
  keywords: "DIY, công nghệ, Arduino, Raspberry Pi, lập trình, điện tử, học sinh, sinh viên",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://diy-tech-blog.vercel.app",
    title: "DIY Tech Blog - Dự án công nghệ cho học sinh, sinh viên",
    description: "Blog chia sẻ các dự án DIY về công nghệ, Arduino, Raspberry Pi và lập trình cho học sinh, sinh viên.",
    siteName: "DIY Tech Blog",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
