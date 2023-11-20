import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { fontMono, fontSans } from "../../lib/fonts"
import { cn } from "../../lib/utils"
import { ThemeProvider } from "../../components/theme-provider"
import { siteConfig } from "../../config/site"
import { SiteHeader } from "../../components/site-header"


// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
}
interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            `min-h-screen bg-background font-sans antialiased ${fontSans.variable} ${fontMono.variable} `
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
            {/* <TailwindIndicator /> */}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
