
import { motion } from 'framer-motion';
import { Minus, Plus, X } from 'lucide-react';
import { useCartStore } from '../store/cart-store';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-serif mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Discover our collection of unique fragrances.</p>
        <Link to="/shop" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-serif mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <motion.div
              key={item.product.id}
              layout
              className="flex gap-6 p-4 bg-white rounded-lg shadow-sm"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded"
              />
              
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-serif text-lg">{item.product.name}</h3>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{item.product.size}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                      className="p-1 hover:bg-gray-100 rounded-full"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 rounded-full"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="font-medium">${item.product.price * item.quantity}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="font-serif text-xl mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between border-t pt-3">
                <span className="font-medium">Total</span>
                <span className="font-medium">${total}</span>
              </div>
            </div>

            <button className="w-full btn btn-primary mb-4">
              Proceed to Checkout
            </button>
            
            <Link
              to="/shop"
              className="w-full btn btn-secondary"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};