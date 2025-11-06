import { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const initialPosts = [
  {
    id: 1,
    author: 'Mark',
    content: 'Selamat datang di dashboard seperti Facebook versi ringan ini! 🎉',
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    author: 'Jane',
    content: 'Menu tree di kiri bisa kamu buka-tutup seperti folder. 👍',
    likes: 7,
    comments: 1,
  },
];

export default function Feed() {
  const [posts, setPosts] = useState(initialPosts);

  const like = (id) => {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p)));
  };

  return (
    <div className="p-6 space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="font-semibold text-gray-800">{post.author}</div>
          <div className="text-gray-700 mt-1">{post.content}</div>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
            <button onClick={() => like(post.id)} className="flex items-center gap-1 hover:text-[#1877F2]">
              <Heart className="w-4 h-4" /> {post.likes}
            </button>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" /> {post.comments}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
