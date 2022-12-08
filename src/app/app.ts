import "reflect-metadata"

import express, { Express } from 'express'
import "express-async-errors";

import swaggerUi from 'swagger-ui-express'

import cors from 'cors'

import { runConnectionMongo } from '../infrasestructure/@shared/config/database'
import swaggerDocument from '../infrasestructure/@shared/swagger.json'


import rootCatalogRoute from '../infrasestructure/catalog/routes'
import ErrorHandler from "../infrasestructure/@shared/middlewares/ErrorHandler";


import '../infrasestructure/container'

const app:Express = express();

runConnectionMongo()

app.use(cors());

app.use(express.json());
app.use(rootCatalogRoute);

// ERROR HANDLER MIDDLEWARE (Last middleware to use)
app.use(ErrorHandler)


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


export default app