import BooksTable from '../components/BooksTable';
import Navbar from '../components/Navbar';
import prisma from '../lib/prisma';

export const getBook = async () => {
  try {
    const response = await prisma.book.findMany();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const books = await getBook();
  return (
    <>
      <Navbar />
      <BooksTable books={books} />
    </>
  );
}
