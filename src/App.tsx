import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import { useRoute } from './lib/router'

export default function App() {
  const route = useRoute()
  return (
    <div className="app">
      <Nav route={route} />
      <main>
        {route === '/' && <Home />}
        {route === '/services' && <Services />}
        {route === '/solutions' && <Solutions />}
        {route === '/products' && <Products />}
        {route === '/about' && <About />}
        {route === '/contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}
