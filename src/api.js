import axios from 'axios';
// import axios, * as others from 'axios';

console.log('start...');

export async function fetchImages(q, page, perPage) {
  const URL = 'https://pixabay.com/api/';
  const KEY = '38153781-c51513b757834e649365382a3';
  const xurl = `${URL}?key=${KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;
  console.log(xurl);

  try {
    // let response = await axios.get(xurl);
    const response = await fetch(xurl);
    console.log(response);
    // return response.data;
    return response.json();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch images');
  }
}

console.log('end...');

// export const fetchImages = async (q, page, perPage) => {
//   const URL = 'https://pixabay.com/api/';
//   const KEY = '38153781-c51513b757834e649365382a3';
//   const url = `${URL}?key=${KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;

//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error('Failed to fetch images');
//   }
// };
