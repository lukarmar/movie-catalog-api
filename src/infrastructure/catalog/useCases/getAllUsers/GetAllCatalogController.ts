import { Request, Response } from 'express'
import { container } from 'tsyringe'
import GetAllCatalogUseCase from './GetAllCatalogUseCase'

export default class GetAllCatalogController{
  async handle(request: Request, response: Response): Promise<Response> {

    const getAllCatalogUseCase = container.resolve(GetAllCatalogUseCase)

    try {

      const catalogs = await getAllCatalogUseCase.execute()

      return response.status(201).json(catalogs)

      
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }


  }
}