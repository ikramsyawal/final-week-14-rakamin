'use client';

import Navbar from '@/components/Navbar';
import { useState } from 'react';
import { registerFetch } from '@/fetch/auth';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    console.log(name, email, password);
    await registerFetch({ name, email, password });
    router.refresh();
  }
  return (
    <>
      <Navbar />
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              className="input input-bordered w-full my-2"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              className="input input-bordered w-full my-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="pasword"
              className="input input-bordered w-full my-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPasword"
              className="input input-bordered w-full my-2"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          {password !== confirmPassword && <p>The password does not match</p>}
          <button className="btn btn-primary">Register</button>
        </form>
      </div>
    </>
  );
}
