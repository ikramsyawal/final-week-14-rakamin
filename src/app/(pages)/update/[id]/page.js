'use client';

import { getBooksById } from '@/fetch/book';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { updateBook } from '@/fetch/book';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function UpdateDetail({ params }) {
  const id = params.id;
  const [data, setData] = useState({});
  const router = useRouter();

  async function getData() {
    const response = await getBooksById(id);
    setData(response);
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleUpdates() {
    await updateBook({ id: id, ...data });
    toast.success('Book Updated Successfully');
    router.push('/');
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <div className="p-2">
        <label>
          Title:
          <input
            placeholder={data.title}
            className="input input-bordered w-full my-2"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </label>
        <label>
          Author:
          <input
            placeholder={data.author}
            className="input input-bordered w-full my-2"
            onChange={(e) => setData({ ...data, author: e.target.value })}
          />
        </label>
        <label>
          Publisher:
          <input
            placeholder={data.publisher}
            className="input input-bordered w-full my-2"
            onChange={(e) => setData({ ...data, publisher: e.target.value })}
          />
        </label>
        <label>
          Year:
          <input
            placeholder={data.year}
            type="number"
            className="input input-bordered w-full my-2"
            onChange={(e) => setData({ ...data, year: e.target.value })}
          />
        </label>
        <label>
          Pages:
          <input
            placeholder={data.pages}
            type="number"
            className="input input-bordered w-full my-2"
            onChange={(e) => setData({ ...data, pages: e.target.value })}
          />
        </label>
        <div className="">
          <button
            type="button"
            className="btn btn-primary w-full mt-2"
            onClick={handleUpdates}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
