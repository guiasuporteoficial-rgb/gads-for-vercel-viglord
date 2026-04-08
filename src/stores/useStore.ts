import { create } from 'zustand';
import { Book, CartItem } from '@/data/types';

interface StoreState {
  cart: CartItem[];
  favorites: string[];
  searchTerm: string;
  addToCart: (book: Book, format?: string) => void;
  removeFromCart: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  clearCart: () => void;
  toggleFavorite: (bookId: string) => void;
  isFavorite: (bookId: string) => boolean;
  setSearchTerm: (term: string) => void;
  cartTotal: () => number;
  cartCount: () => number;
  coupon: string | null;
  couponDiscount: number;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  shippingCost: number;
  setShippingCost: (cost: number) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  favorites: [],
  searchTerm: '',
  coupon: null,
  couponDiscount: 0,
  shippingCost: 0,

  addToCart: (book, format) => {
    const { cart } = get();
    const existing = cart.find(item => item.book.id === book.id);
    if (existing) {
      set({ cart: cart.map(item => item.book.id === book.id ? { ...item, quantity: item.quantity + 1 } : item) });
    } else {
      set({ cart: [...cart, { book, quantity: 1, format: format || book.format }] });
    }
  },

  removeFromCart: (bookId) => set(state => ({ cart: state.cart.filter(item => item.book.id !== bookId) })),

  updateQuantity: (bookId, quantity) => {
    if (quantity <= 0) {
      set(state => ({ cart: state.cart.filter(item => item.book.id !== bookId) }));
    } else {
      set(state => ({ cart: state.cart.map(item => item.book.id === bookId ? { ...item, quantity } : item) }));
    }
  },

  clearCart: () => set({ cart: [], coupon: null, couponDiscount: 0 }),

  toggleFavorite: (bookId) => set(state => ({
    favorites: state.favorites.includes(bookId)
      ? state.favorites.filter(id => id !== bookId)
      : [...state.favorites, bookId]
  })),

  isFavorite: (bookId) => get().favorites.includes(bookId),

  setSearchTerm: (term) => set({ searchTerm: term }),

  cartTotal: () => {
    const { cart, couponDiscount, shippingCost } = get();
    const subtotal = cart.reduce((sum, item) => sum + item.book.price * item.quantity, 0);
    const discount = subtotal * couponDiscount;
    return Math.max(0, subtotal - discount + shippingCost);
  },

  cartCount: () => get().cart.reduce((sum, item) => sum + item.quantity, 0),

  applyCoupon: (code) => {
    if (code.toUpperCase() === 'PRIMEIRACOMPRA') {
      set({ coupon: code.toUpperCase(), couponDiscount: 0.10 });
      return true;
    }
    return false;
  },

  removeCoupon: () => set({ coupon: null, couponDiscount: 0 }),
  setShippingCost: (cost) => set({ shippingCost: cost }),
}));
