
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80"
            alt="Luxury perfume"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              Discover Your Signature Scent
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Explore our curated collection of luxury fragrances, each telling its own unique story.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Floral', 'Woody', 'Oriental'].map((category) => (
              <motion.div
                key={category}
                whileHover={{ y: -10 }}
                className="relative h-96 group cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80`}
                  alt={category}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg group-hover:bg-black/50 transition-colors" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-serif mb-2">{category}</h3>
                  <p className="text-gray-200">Discover the collection →</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};