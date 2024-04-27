import { BASE_URL } from '../lib/baseUrl';

export const loginFetch = async (params) => {
  try {
    const response = await fetch(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error({ message: error.response.message });
  }
};

export const registerFetch = async (params) => {
  try {
    const response = await fetch(`${BASE_URL}/api/register`, {
      method: 'POST',
      body: JSON.stringify(params),
    });
  } catch (error) {
    console.log(error);
    throw new Error({ message: error.response.message });
  }
};
