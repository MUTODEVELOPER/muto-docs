import 'nextra-theme-docs/style.css'
import '../styles.css'
import { Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import themeConfig from '../theme.config'
import Background from '../components/Background'
export const metadata = {
  title: 'MUTO AI Docs',
  description: 'Official documentation for the MUTO ecosystem and MUTO AI Agent on BNB Chain.'
}

function BrandNavbar() {
  return (
    <Navbar
      logo={
        <div className="brand-wrap">
          <img src="/logo.png" alt="MUTO" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-title">MUTO Docs</span>
            <span className="brand-subtitle">BNB Chain Ecosystem</span>
          </div>
        </div>
      }
    >
      <div className="desktop-nav-actions">
        <a href="https://mutobnb.com" target="_blank" rel="noreferrer" className="top-nav-link">
          Website
        </a>
        <a href="https://x.com/Muto_cto_" target="_blank" rel="noreferrer" className="top-nav-link">
          X
        </a>
        <a href="https://t.me/mutobnb" target="_blank" rel="noreferrer" className="top-nav-link">
          Telegram
        </a>
        <a href="https://pancakeswap.finance/swap?outputCurrency=0x41AE062031f2DE850D1b7f4619a570c8D5620483&chain=bsc" target="_blank" rel="noreferrer" className="top-nav-button">
          Buy $MUTO
        </a>
      </div>
    </Navbar>
  )
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Layout
          navbar={<BrandNavbar />}
          pageMap={await getPageMap()}
          {...themeConfig}
        >
          {children}
        </Layout>
        <Background />

  
      </body>
    </html>
  )
}