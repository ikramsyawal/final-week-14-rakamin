'use client';

import Navbar from './Navbar';

export default function BookForm() {
  const book = [];
  function handleSubmit() {
    console.log('submit');
  }

  function handleChange() {
    console.log('change');
  }

  return (
    <>
      <Navbar />
      <div className="p-2">
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={book.title}
            className="input input-bordered w-full my-2"
            onChange={handleChange}
          />
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={book.author}
            className="input input-bordered w-full my-2"
            onChange={handleChange}
          />
          <label>Publisher:</label>
          <input
            type="text"
            name="publisher"
            value={book.publisher}
            className="input input-bordered w-full my-2"
            onChange={handleChange}
          />
          <label>Year:</label>
          <input
            type="number"
            name="year"
            value={book.year}
            className="input input-bordered w-full my-2"
            onChange={handleChange}
          />
          <label>Pages:</label>
          <input
            type="number"
            name="pages"
            value={book.pages}
            className="input input-bordered w-full my-2"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn btn-accent text-secondary-content"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}
