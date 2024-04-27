'use client';

import Cookies from 'js-cookie';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [hasToken, setHasToken] = useState(false);
  const router = useRouter();

  function handleLogout() {
    Cookies.remove('access_token');
    setHasToken(false);
    router.push('/login');
    window.location.reload();
  }

  useEffect(() => {
    if (Cookies.get('access_token')) {
      setHasToken(true);
    }
  }, [hasToken]);

  return (
    <nav className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <Link href="/" className=" btn-ghost normal-case text-xl">
          Books
        </Link>
      </div>

      <div className="flex-2">
        {hasToken ? (
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl"
            onClick={handleLogout}
          >
            logout
          </Link>
        ) : (
          <Link href="/login" className="btn btn-ghost normal-case text-xl">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
