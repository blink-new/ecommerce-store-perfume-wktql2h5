
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Product } from '../types';

// Temporary mock data
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Midnight Rose',
    description: 'A mysterious blend of dark rose and oudh',
    price: 120,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80',
    category: 'Floral',
    scentNotes: ['Rose', 'Oudh', 'Vanilla'],
    size: '50ml',
    inStock: true,
  },
  {
    id: '2',
    name: 'Ocean Breeze',
    description: 'Fresh aquatic notes with a hint of citrus',
    price: 95,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80',
    category: 'Fresh',
    scentNotes: ['Sea Salt', 'Bergamot', 'Cedar'],
    size: '50ml',
    inStock: true,
  },
  // Add more mock products as needed
];

export const Shop = () => {
  const [products] = useState<Product[]>(MOCK_PRODUCTS);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif mb-8">Our Collection</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="relative aspect-square mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <button className="absolute bottom-4 left-4 right-4 bg-black text-white py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                View Details
              </button>
            </div>
            <h3 className="text-xl font-serif mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="font-medium">${product.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};