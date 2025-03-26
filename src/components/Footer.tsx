
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Store</h3>
            <p className="text-sm">
              Your one-stop shop for amazing products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm hover:text-white transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm hover:text-white transition-colors">
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:contact@store.com" className="hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};