import type { NextApiRequest, NextApiResponse } from 'next';

export const getData = async () => {
  try {
    const response = await fetch('https://picsum.photos/v2/list?page=2&limit=200');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
