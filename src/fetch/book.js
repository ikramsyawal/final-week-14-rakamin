export const createBook = async (params) => {
  console.log(params);
  try {
    const { year, pages, ...rest } = params;
    const requestParams = {
      ...rest,
      year: Number(year),
      pages: Number(pages),
    };
    const response = await fetch('http://localhost:3000/api/books', {
      method: 'POST',
      body: JSON.stringify(requestParams),
    });

    console.log(JSON.stringify(params));

    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/books/${id}`, {
      method: 'DELETE',
    });
    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};

export const updateBook = async (params) => {
  try {
    const { year, pages, ...rest } = params;
    const requestParams = {
      ...rest,
      year: Number(year),
      pages: Number(pages),
    };
    const response = await fetch(
      `http://localhost:3000/api/books/${params.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(requestParams),
      },
    );
    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};

export const getBooksById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/books/${id}`);
    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};

export const uploadImage = async (params) => {
  try {
    const response = await fetch(`http://localhost:3000/api/books/uploads`, {
      method: 'POST',
      body: params,
    });

    const data = await response.json();
    console.log(data, '<<<<<<<<');
    return data;
  } catch (err) {
    throw new Error({
      message: err.response.message || 'internal server error',
    });
  }
};
