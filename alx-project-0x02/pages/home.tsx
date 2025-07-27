import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';


export default function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      
      {/* Use Card component with some example props */}
      <Card title="Hello" content="This is a reusable card component!" />
      
      <Card title="Another Card" content="You can use many cards with different info." />
    </div>
  );
}

