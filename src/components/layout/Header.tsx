
import { ShoppingBag, Menu } from 'lucide-react';
import { useCartStore } from '../../store/cart-store';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Header = () => {
  const cartItems = useCartStore((state) => state.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button className="lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        
        <Link to="/" className="text-2xl font-serif">
          Essence
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/shop" className="hover:text-gray-600 transition-colors">
            Shop
          </Link>
          <Link to="/collections" className="hover:text-gray-600 transition-colors">
            Collections
          </Link>
          <Link to="/about" className="hover:text-gray-600 transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingBag className="w-6 h-6" />
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              >
                {itemCount}
              </motion.span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};