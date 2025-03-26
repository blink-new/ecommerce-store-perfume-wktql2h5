
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  scentNotes: string[];
  size: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  productId: string;
  rating: number;
  comment: string;
  userName: string;
  date: string;
}