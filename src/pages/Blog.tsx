import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { blogPosts } from '@/data/blog-posts';

const Blog = () => {
  useEffect(() => { document.title = 'Blog | Página Viva'; }, []);

  return (
    <Layout>
      <section className="bg-gradient-to-r from-brown to-burnt-orange py-16 text-white">
        <div className="container text-center">
          <h1 className="font-serif text-4xl font-bold mb-2">📝 Blog Página Viva</h1>
          <p className="opacity-90">Dicas, Novidades e Cultura Literária</p>
        </div>
      </section>
      <div className="container py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <div className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-48 ${post.imageColor} flex items-center justify-center text-white text-5xl`}>📝</div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-burnt-orange uppercase">{post.category}</span>
                  <h2 className="font-serif text-xl font-bold mt-1 mb-2 group-hover:text-burnt-orange transition-colors">{post.title}</h2>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.summary}</p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
