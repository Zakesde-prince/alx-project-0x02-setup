import Head from 'next/head';
import Card from '../components/common/Card';  // Import Card component

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
          Welcome to My Next.js App
        </h1>

        {/* Use the Card component 3 times with different props */}
        <Card title="Card 1" content="This is the content of the first card." />
        <Card title="Card 2" content="Here is some different content for the second card." />
        <Card title="Card 3" content="Cards help reuse UI components efficiently." />
      </main>
    </>
  );
}
