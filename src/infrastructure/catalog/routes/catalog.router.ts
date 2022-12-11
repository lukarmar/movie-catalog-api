import { Router } from 'express'
import CreateCatalogController from '../useCases/createCatalog/CreateCatalogController'
import GetAllCatalogController from '../useCases/getAllUsers/GetAllCatalogController'



const catalogRouter = Router()

const createCatalogController = new CreateCatalogController()
const getAllCatalogController = new GetAllCatalogController()


catalogRouter.post('/', createCatalogController.handle)
catalogRouter.get('/', getAllCatalogController.handle)


export default catalogRouter