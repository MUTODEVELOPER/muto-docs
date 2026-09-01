import 'nextra-theme-docs/style.css'
import '../styles.css'
import { Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import themeConfig from '../theme.config'
import Background from '../components/Background'
export const metadata={title:'MUTO Docs | AI Ecosystem on BNB Chain',description:'Technical documentation for MUTO AI Ecosystem, BNB Intelligence, PancakeSwap activity, wallet intelligence, alerts and the MUTO Agent.'}
function BrandNavbar(){return <Navbar logo={<div className="brand-wrap"><img src="/logo.png" alt="MUTO" className="brand-logo"/><div className="brand-text"><span className="brand-title">MUTO DOCS</span><span className="brand-subtitle">AI ECOSYSTEM // BNB CHAIN</span></div></div>}><div className="desktop-nav-actions"><a href="https://mutobnb.com" target="_blank" rel="noreferrer" className="top-nav-link">Website</a><a href="https://app.mutobnb.com" target="_blank" rel="noreferrer" className="top-nav-link">App</a><a href="https://x.com/MutoCore" target="_blank" rel="noreferrer" className="top-nav-link">X</a><a href="https://t.me/mutobnb" target="_blank" rel="noreferrer" className="top-nav-link">Telegram</a><a href="https://pancakeswap.finance/swap?outputCurrency=0x41AE062031f2DE850D1b7f4619a570c8D5620483&chain=bsc" target="_blank" rel="noreferrer" className="top-nav-button">Buy $MUTO</a></div></Navbar>}
export default async function RootLayout({children}){return <html lang="en" suppressHydrationWarning><body><Layout navbar={<BrandNavbar/>} pageMap={await getPageMap()} {...themeConfig}>{children}</Layout><Background/></body></html>}
