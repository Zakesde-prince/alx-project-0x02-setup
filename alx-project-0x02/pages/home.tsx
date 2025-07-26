import React from 'react';
import Card from '@/components/common/Card';

export default function HomePage() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">🏠 Home Page with Cards</h1>

      <Card title="Card 1" content="This is the content of the first card." />
      <Card title="Card 2" content="Here is some different content for the second card." />
      <Card title="Card 3" content="Cards help reuse UI components efficiently." />
    </div>
  );
}
