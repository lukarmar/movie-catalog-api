import axios from 'axios';


const url = 'http://www.omdbapi.com/';


export const omdbApi = axios.create({
  baseURL: url,
});

