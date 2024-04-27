'use client';
import { deleteBook } from '@/fetch/book';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BooksForm({ books }) {
  const [hasToken, setHasToken] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get('access_token')) {
      setHasToken(true);
    }
  }, [hasToken]);

  async function handleDelete(id) {
    await deleteBook(id);
    router.refresh();
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-zebra table-lg w-full">
          <thead>
            <tr>
              <th className="text-left">No</th>
              <th className="text-left">Title</th>
              <th className="text-left">Author</th>
              <th className="text-left">Publisher</th>
              <th className="text-left">Year</th>
              <th className="text-left">Pages</th>
              <th className="text-left">Image</th>
              {hasToken && <th className="text-left">Action</th>}
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book, index) => (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publisher}</td>
                  <td>{book.year}</td>
                  <td>{book.pages}</td>
                  <td>imagepath</td>
                  {hasToken && (
                    <td>
                      <button
                        className="btn btn-error btn-sm"
                        onClick={(e) => handleDelete(book.id)}
                      >
                        Delete
                      </button>
                      <Link
                        href={`/update/${book.id}`}
                        className="btn btn-primary btn-sm"
                      >
                        Update
                      </Link>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
