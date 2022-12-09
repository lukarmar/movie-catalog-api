import { Router } from 'express'
import catalogRouter from './catalog.router'


const rootCatalogRoute = Router()


rootCatalogRoute.use('/catalog', catalogRouter)

export default rootCatalogRoute;