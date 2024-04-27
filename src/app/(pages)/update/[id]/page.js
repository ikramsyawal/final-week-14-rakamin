'use client';

import { getBooksById } from '@/fetch/book';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

export default function UpdateDetail({ params }) {
  const id = params.id;
  const [data, setData] = useState({});
  const [hasImage, setHasImage] = useState(false);

  async function getData() {
    const response = await getBooksById(id);
    setData(response);
    setHasImage(response.image ? true : false);
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div>
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
        <div>
          {hasImage ? (
            <button className="btn" onClick={() => setHasImage(false)}>
              Delete image
            </button>
          ) : (
            <label>
              Image:
              <input type="file" />
            </label>
          )}
        </div>
        <div>
          <button
            type="button"
            className="btn"
            onClick={() => console.log(data)}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
