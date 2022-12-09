import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreateCatalogUseCase from './CreateCatalogUseCase'

import { getRequestDataMovies } from '../../../utils/api-provider' 


export default class CreateCatalogCotroller{
  async handle(request: Request, response: Response): Promise<Response> {
    const { page } = request.query
    const pageInt = +page

    const createCatalogUseCase = container.resolve(CreateCatalogUseCase)

    try {

      const dataCatalogs = await getRequestDataMovies(pageInt)


      for await(const catalog of dataCatalogs){
        
        await createCatalogUseCase.execute(catalog)
      }
      
      
      return response.status(201).send()

      
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }


  }
}