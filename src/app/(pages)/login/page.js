'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginFetch } from '@/fetch/auth';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    await loginFetch({ email, password });
    toast.success('Login Success');
    router.push('/');
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <div className="p-2">
        <div>
          <label>Email:</label>
          <input
            type="text"
            placeholder="Enter email"
            className="input input-bordered w-full my-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            className="input input-bordered w-full my-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary w-full mt-2"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
        <div className="text-center mt-2">
          <Link href={'/register'}>
            Don&apos;t have an account? register here
          </Link>
        </div>
      </div>
    </>
  );
}
