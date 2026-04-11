import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '@/data/blog-posts';
import { ChevronRight } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    document.title = post ? `${post.title} | Blog DROPIX EDITORA` : 'Post não encontrado';
  }, [post]);

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-serif text-2xl font-bold mb-4">Post não encontrado</h1>
        <Link to="/blog" className="text-burnt-orange hover:underline">← Voltar ao Blog</Link>
      </div>
    );
  }

  return (
    <div className="container py-8 max-w-3xl">
      <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Início</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/blog" className="hover:text-foreground">Blog</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground truncate">{post.title}</span>
      </nav>

      <span className="text-xs font-semibold text-burnt-orange uppercase">{post.category}</span>
      <h1 className="font-serif text-3xl md:text-4xl font-bold mt-1 mb-3">{post.title}</h1>
      <div className="flex gap-4 text-sm text-muted-foreground mb-8">
        <span>Por {post.author}</span>
        <span>{post.date}</span>
      </div>

      <div className={`h-64 rounded-lg mb-8 ${post.imageColor} flex items-center justify-center text-white text-6xl`}>📝</div>

      <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />

      <div className="mt-12 pt-8 border-t">
        <Link to="/blog" className="text-burnt-orange hover:underline">← Voltar ao Blog</Link>
      </div>
    </div>
  );
};

export default BlogPost;
