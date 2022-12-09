import { Router } from 'express'
import CreateCatalogCotroller from '../useCases/createCatalog/CreateCatalogController'
import GetAllCatalogController from '../useCases/getAllUsers/GetAllCatalogController'



const catalogRouter = Router()

const createCatalogCotroller = new CreateCatalogCotroller()
const getAllCatalogController = new GetAllCatalogController()


catalogRouter.post('/', createCatalogCotroller.handle)
catalogRouter.get('/', getAllCatalogController.handle)


export default catalogRouter