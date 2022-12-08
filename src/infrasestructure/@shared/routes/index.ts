import { Router } from "express";
import catalogRoutes from "../../catalog/routes/catalog.router";
// import healthcheckRoutes from "./healthcheck/healthcheck.router";



const routes = Router();


// routes.use("/healthcheck", healthcheckRoutes);
routes.use("/catalog", catalogRoutes);

export default routes;