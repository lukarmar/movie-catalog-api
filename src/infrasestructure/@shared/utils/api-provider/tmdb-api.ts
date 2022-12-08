import axios from 'axios';


const url = 'https://api.themoviedb.org/3/movie/';


export const tmdbApi = axios.create({
  baseURL: url,
});

