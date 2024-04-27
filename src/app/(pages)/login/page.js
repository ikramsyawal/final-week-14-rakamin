'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginFetch } from '@/fetch/auth';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    await loginFetch({ email, password });
    router.push('/');
  };

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
}
