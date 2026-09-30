import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Landing from './pages/Landing.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Products from './pages/Products.jsx'
import Research from './pages/Research.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
