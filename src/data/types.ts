export interface Book {
  id: string;
  slug: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  format: string;
  pages: number;
  isbn: string;
  publisher: string;
  year: number;
  synopsis: string;
  category: string;
  categorySlug: string;
  isBestSeller?: boolean;
  isNewRelease?: boolean;
  isOnSale?: boolean;
}

export interface Category {
  name: string;
  slug: string;
  icon: string;
  color: string;
  bookCount: number;
  description: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  imageColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface CartItem {
  book: Book;
  quantity: number;
  format: string;
}
