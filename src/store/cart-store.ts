
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '../types';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (product: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.product.id === product.id
        );

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ items: [...currentItems, { product, quantity: 1 }] });
        }
        
        set({ total: calculateTotal(get().items) });
      },
      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
          total: calculateTotal(state.items.filter((item) => item.product.id !== productId)),
        }));
      },
      updateQuantity: (productId: string, quantity: number) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
          total: calculateTotal(state.items),
        }));
      },
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
);

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
};