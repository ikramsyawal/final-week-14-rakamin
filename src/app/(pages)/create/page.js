'use client';
import { createBook, uploadImage } from '@/fetch/book';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function CreateBook() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [year, setYear] = useState();
  const [pages, setPages] = useState();
  const [image, setImage] = useState('');

  async function handleSubmit() {
    await createBook({ title, author, publisher, year, pages, image });
    toast.success('Book Created Success');
    router.push('/');
  }

  const handleImageUrl = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append('image', image);
    const response = await uploadImage(formData);
    console.log(response.image_url);
    if (response.image_url) {
      setImage(response.image_url);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
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
        <label>Image:</label>
        <input type="file" onChange={(e) => handleImageUrl(e)} />
        <div>
          <button
            type="button"
            className="btn btn-primary text-secondary-content mt-2 w-full"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
