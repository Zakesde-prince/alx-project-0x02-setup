import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

export default function Users({ users }: UsersPageProps) {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">User List</h1>
        <div className="space-y-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </>
  );
}

// ✅ Fetch user data with getStaticProps
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }));

  return {
    props: {
      users,
    },
  };
}
