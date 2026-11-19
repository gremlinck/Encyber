import Nav from './components/Nav'
import Footer from './components/Footer'
import Announcement from './components/Announcement'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import { useRoute } from './lib/router'
import { useReveal } from './lib/useReveal'

export default function App() {
  const route = useRoute()
  useReveal(route)
  return (
    <div className="app">
      <Announcement />
      <Nav route={route} />
      <main>
        {route === '/' && <Home />}
        {route === '/services' && <Services />}
        {route === '/products' && <Products />}
        {route === '/about' && <About />}
        {route === '/contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}
