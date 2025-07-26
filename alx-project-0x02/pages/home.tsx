import Head from 'next/head';
import { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([
    { title: 'Welcome Post', content: 'This is the first post!' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Head>
        <title>Home with Modal</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
          Home Page with Posts and Modal
        </h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded"
        >
          Add New Post
        </button>

        {/* Render posts */}
        {posts.map((post, idx) => (
          <Card key={idx} title={post.title} content={post.content} />
        ))}

        {/* PostModal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      </main>
    </>
  );
}
