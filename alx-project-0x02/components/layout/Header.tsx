import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white flex justify-center gap-6">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/home" className="hover:underline">
        /home
      </Link>
      <Link href="/about" className="hover:underline">
        /about
      </Link>
    </header>
  );
};

export default Header;
