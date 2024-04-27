'use client';
import { createBook } from '@/fetch/book';
import { useState } from 'react';

export default function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [year, setYear] = useState();
  const [pages, setPages] = useState();
  const image = 'test image path';

  async function handleSubmit() {
    await createBook({ title, author, publisher, year, pages, image });
  }

  return (
    <>
      <div className="p-2">
        <label>Title:</label>
        <input
          type="text"
          className="input input-bordered w-full my-2"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author:</label>
        <input
          type="text"
          className="input input-bordered w-full my-2"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Publisher:</label>
        <input
          type="text"
          className="input input-bordered w-full my-2"
          onChange={(e) => setPublisher(e.target.value)}
        />
        <label>Year:</label>
        <input
          type="number"
          className="input input-bordered w-full my-2"
          onChange={(e) => setYear(e.target.value)}
        />
        <label>Pages:</label>
        <input
          type="number"
          className="input input-bordered w-full my-2"
          onChange={(e) => setPages(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-accent text-secondary-content"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </>
  );
}
