
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, Star } from 'lucide-react';
import { useState } from 'react';
import { useCartStore } from '../store/cart-store';

// Temporary mock data - would normally come from an API
const MOCK_PRODUCT = {
  id: '1',
  name: 'Midnight Rose',
  description: 'A mysterious blend of dark rose and oudh, this enchanting fragrance opens with deep, velvety rose petals intertwined with the rich, woody notes of premium oudh. The heart reveals hints of vanilla and amber, while the base notes of musk and patchouli create a lasting impression that lingers on the skin.',
  price: 120,
  image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80',
  category: 'Floral',
  scentNotes: ['Rose', 'Oudh', 'Vanilla', 'Amber', 'Musk', 'Patchouli'],
  size: '50ml',
  inStock: true,
};

export const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(MOCK_PRODUCT);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative aspect-square">
          <img
            src={MOCK_PRODUCT.image}
            alt={MOCK_PRODUCT.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-serif mb-2">{MOCK_PRODUCT.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">(124 reviews)</span>
            </div>
            <p className="text-2xl font-medium">${MOCK_PRODUCT.price}</p>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {MOCK_PRODUCT.description}
          </p>

          <div>
            <h3 className="font-serif text-lg mb-2">Scent Notes</h3>
            <div className="flex flex-wrap gap-2">
              {MOCK_PRODUCT.scentNotes.map((note) => (
                <span
                  key={note}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border rounded-full"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border rounded-full"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full btn btn-primary"
            >
              Add to Cart
            </button>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-serif text-lg mb-4">Product Details</h3>
            <dl className="space-y-2">
              <div className="flex">
                <dt className="w-24 text-gray-600">Size</dt>
                <dd>{MOCK_PRODUCT.size}</dd>
              </div>
              <div className="flex">
                <dt className="w-24 text-gray-600">Category</dt>
                <dd>{MOCK_PRODUCT.category}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </motion.div>
  );
};