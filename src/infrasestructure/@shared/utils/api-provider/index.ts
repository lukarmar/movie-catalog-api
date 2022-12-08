import { omdbApi } from './omdb-api'
import { tmdbApi } from './tmdb-api'

import Movie  from '../../../../domain/vehicle/entity/movie'

interface MovieOmdbInterface {
  Title: string;
  Director: string;
  Poster: string;
  Plot: string;
  Writer: string;
}


export const getRequestDataMovies = async (currentPage: number):Promise<any[]> => {
  
  const dataMovies = []

  const requestCollection = Array.from({length: currentPage}).map((_, index) => tmdbApi
        .get(`popular?page=${index + 1}&api_key=5fc115f4458e36affc6704b738c9e984&language=en-US`))


  const responseCollection = await (await Promise.all(requestCollection)).map((response) => response.data.results).flat(1)
  

  for await (const movie of responseCollection) {

    const { data: dataDetailMovie } = await tmdbApi.get(`${movie.id}?api_key=5fc115f4458e36affc6704b738c9e984&language=en-US`)

    const { data: dataDetailMovieOmdb } = await omdbApi.get<MovieOmdbInterface>(`?i=${dataDetailMovie.imdb_id}&apikey=bf0b21a1`)

    const detailMovie = {

      title: dataDetailMovieOmdb.Title || "No title",
      director: dataDetailMovieOmdb.Director || "No director",
      banner: dataDetailMovieOmdb.Poster || "No banner",
      description: dataDetailMovieOmdb.Plot || "No description",
      producer: dataDetailMovieOmdb.Writer || "No producer",
      

    }

    dataMovies.push(detailMovie)
  }


  return dataMovies
}