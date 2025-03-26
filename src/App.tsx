
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <main className="pt-16">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}