export default function BooksForm() {
  return (
    <>
      <h1>Books Form</h1>
      <div className="overflow-x-auto">
        <table className="table-zebra table-lg w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Year</th>
              <th>Pages</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
}
