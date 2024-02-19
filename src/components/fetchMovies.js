import axios from 'axios';

axios.defaults.baseURL = 'https://www.api.themoviedb.org';

const apiKey = 'e58ffa44180a16235283b8c62dada0cb';

export const fetchMovies = async movieId => {
  try {
    const response = await axios.get(`/3/movie/${movieId}/?api_key=${apiKey}`);
    console.log('bad_bob');
    console.log(response);
  } catch (error) {
    console.log('Failed fetch data: ', error);
  }
};
