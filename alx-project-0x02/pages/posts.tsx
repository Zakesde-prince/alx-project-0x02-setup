import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-green-600">Posts Page</h1>
      </main>
    </>
  );
}
