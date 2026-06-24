import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import VaroAI from './pages/VaroAI'
import About from './pages/About'
import Contact from './pages/Contact'

type Page = 'home' | 'varo-ai' | 'about' | 'contact'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const navigate = (page: Page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // Update document title per page
    const titles: Record<Page, string> = {
      'home': 'ENCYBER — Pioneering Cybersecurity for Critical Technologies',
      'varo-ai': 'Varo AI — OT/ICS Security Decision Intelligence · ENCYBER',
      'about': 'About ENCYBER — Founded by Christine Kim',
      'contact': 'Contact ENCYBER — Request a Varo AI Demo',
    }
    document.title = titles[page]
  }

  useEffect(() => {
    // Re-run reveal observer on page change
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
        { threshold: 0.1 }
      )
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('visible')
        observer.observe(el)
      })
      return () => observer.disconnect()
    }, 50)
    return () => clearTimeout(timeout)
  }, [currentPage])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav currentPage={currentPage} onNavigate={navigate} />

      <main style={{ flex: 1, paddingTop: 68 }}>
        {currentPage === 'home' && <Home onNavigate={navigate} />}
        {currentPage === 'varo-ai' && <VaroAI onNavigate={navigate} />}
        {currentPage === 'about' && <About onNavigate={navigate} />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <Footer onNavigate={navigate} />

      <style>{`
        @media (max-width: 768px) {
          section { padding-left: 5vw !important; padding-right: 5vw !important; }
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          div[style*="grid-template-columns: 2fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
