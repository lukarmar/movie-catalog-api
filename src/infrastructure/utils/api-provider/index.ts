import { api } from './api'


export const getRequestDataMovies = async (currentPage: number):Promise<any[]> => {
  
  const requestCollection = Array.from({length: currentPage}).map((_, index) => api
        .get(`?page=${index + 1}`))


  const responseCollection = await Promise.all(requestCollection)


  return responseCollection.map((response) => response.data).flat(1)
}