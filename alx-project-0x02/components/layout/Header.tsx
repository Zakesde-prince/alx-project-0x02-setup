import Link from 'next/link';

const Header = () => (
  <header className="bg-blue-600 p-4 text-white flex justify-center gap-4">
    <Link href="/home">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/posts">Posts</Link>
    <Link href="/users">Users</Link> {/* Add this line */}
  </header>
);

export default Header;
