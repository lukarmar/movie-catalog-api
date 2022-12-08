import axios from 'axios';


const url = 'https://app-movies-db.herokuapp.com/movies';


export const api = axios.create({
  baseURL: url,
});

