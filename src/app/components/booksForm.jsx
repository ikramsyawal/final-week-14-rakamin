import prisma from '../lib/prisma';

export const getBook = async () => {
  try {
    const response = await prisma.book.findMany();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default async function BooksForm() {
  const props = await getBook();
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-zebra table-lg w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Year</th>
              <th>Pages</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {props &&
              props.map((book, index) => (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publisher}</td>
                  <td>{book.year}</td>
                  <td>{book.pages}</td>
                  <td>imagepath</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
