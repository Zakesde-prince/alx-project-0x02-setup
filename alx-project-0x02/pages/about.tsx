import Head from 'next/head';
import Button from '@/components/common/Button';

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-8 flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">About Page</h1>

        <Button size="small" shape="rounded-sm">Small Rounded-sm</Button>
        <Button size="medium" shape="rounded-md">Medium Rounded-md</Button>
        <Button size="large" shape="rounded-full">Large Rounded-full</Button>
      </main>
    </>
  );
}
