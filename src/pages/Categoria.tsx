import { useParams, Link } from 'react-router-dom';
import { getBooksByCategory } from '@/data/books';
import { categories } from '@/data/categories';
import BookCard from '@/components/BookCard';

const Categoria = () => {
  const { slug } = useParams();
  const cat = categories.find(c => c.slug === slug);
  const books = getBooksByCategory(slug || '');

  if (!cat) return <div className="container py-20 text-center"><h1 className="font-serif text-2xl">Categoria não encontrada</h1></div>;

  return (
    <div className="container py-8">
      <nav className="text-sm text-muted-foreground mb-4">
        <Link to="/" className="hover:text-foreground">Início</Link> {' > '} <Link to="/loja" className="hover:text-foreground">Loja</Link> {' > '} <span className="text-foreground">{cat.name}</span>
      </nav>
      <div className="rounded-xl p-8 mb-8 text-white" style={{ backgroundColor: cat.color }}>
        <span className="text-4xl">{cat.icon}</span>
        <h1 className="font-serif text-3xl font-bold mt-2">{cat.name}</h1>
        <p className="mt-2 max-w-2xl opacity-90">{cat.description}</p>
        <p className="mt-1 text-sm opacity-75">{books.length} livros encontrados</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map(b => <BookCard key={b.id} book={b} />)}
      </div>
    </div>
  );
};

export default Categoria;
