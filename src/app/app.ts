import "reflect-metadata"

import express, { Express } from 'express'
import "express-async-errors";

import swaggerUi from 'swagger-ui-express'

import cors from 'cors'

import { runConnectionMongo } from '../infrastructure/@shared/config/database'
import swaggerDocument from '../infrastructure/@shared/swagger.json'


import rootCatalogRoute from '../infrastructure/catalog/routes'
import ErrorHandler from "../infrastructure/@shared/middlewares/ErrorHandler";


import '../infrastructure/container'

const app:Express = express();

runConnectionMongo()

app.use(cors());

app.use(express.json());
app.use(rootCatalogRoute);

// ERROR HANDLER MIDDLEWARE (Last middleware to use)
app.use(ErrorHandler)


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


export default app