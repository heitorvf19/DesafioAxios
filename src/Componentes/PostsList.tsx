import { useEffect, useState } from "react";
import api from "../api/api";

interface Post {
    id: number;
    title: string;
    body: string;
  }

export default function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            setLoading(true);
            const response = await api.get('');
            
            setPosts(response.data);
            setError(null);
          } catch (err) {
            setError(err instanceof Error ? err.message : 'Ocorreu um erro ao carregar os posts');
          } finally {
            setLoading(false);
          }
        };
    
        fetchPosts();
      }, []);

      if (loading) {
        return (
          <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4">
            <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
            <p className="text-gray-600">Carregando posts...</p>
          </div>
        );
      }
    
      if (error) {
        return (
          <div className="text-center p-5">
            <p className="text-red-600 mb-4">⚠️ Erro: {error}</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              onClick={() => window.location.reload()}
            >
              Tentar novamente 
            </button>
          </div>
        );
      }
    
      return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Lista de Posts</h1>
          
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 italic">Nenhum post encontrado</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      );
}