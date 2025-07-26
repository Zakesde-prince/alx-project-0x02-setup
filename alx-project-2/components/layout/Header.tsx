import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex gap-4">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
    </header>
  );
};

export default Header;
