import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

export default function Posts({ posts }: PostsPageProps) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Latest Posts</h1>
        <div className="max-w-3xl mx-auto">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
}

// ✅ Static generation with getStaticProps
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
}
