import { Router } from 'express'
import CreateCatalogCotroller from '../useCases/createCatalog/CreateCatalogController'
import GetAllCatalogController from '../useCases/getAllUsers/GetAllCatalogController'
// import GetAllUsersController from '../useCases/getAllUsers/GetAllUsersController'
// import GetUserIdCotroller from '../useCases/getUsersId/GetUserIdController'
// import UpdateUserCotroller from '../useCases/updateUser/UpdateUserController'


const catalogRouter = Router()

const createCatalogCotroller = new CreateCatalogCotroller()
const getAllCatalogController = new GetAllCatalogController()
// const getUserIdCotroller = new GetUserIdCotroller()
// const updateUserCotroller = new UpdateUserCotroller()

catalogRouter.post('/', createCatalogCotroller.handle)
catalogRouter.get('/', getAllCatalogController.handle)

// catalogRouter.post('/', createUserCotroller.handle)
// catalogRouter.get('/', getAllUsersController.handle)
// catalogRouter.get('/:id', getUserIdCotroller.handle)
// catalogRouter.put('/:id', updateUserCotroller.handle)


export default catalogRouter