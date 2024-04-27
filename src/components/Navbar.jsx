'use client';

import Cookies from 'js-cookie';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function Navbar() {
  const [hasToken, setHasToken] = useState(false);
  const router = useRouter();

  function handleLogout() {
    Cookies.remove('access_token');
    setHasToken(false);
    router.push('/login');
    toast.success('Logout Success');
    router.refresh();
  }

  useEffect(() => {
    if (Cookies.get('access_token')) {
      setHasToken(true);
    }
  }, [hasToken]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <nav className="navbar bg-primary text-primary-content">
        <div className="flex-1 gap-2">
          <Link href="/" className=" btn-ghost normal-case text-xl">
            Books
          </Link>
          <Link href="/create" className="btn btn-ghost normal-case text-xl">
            Create
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
    </>
  );
}
