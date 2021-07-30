import { Router } from "express";
import { CreateCarController } from "../controllers/carsControllers/CreateCarController";
import { DeleteCarController } from "../controllers/carsControllers/DeleteCarController";
import { FindCarByIdController } from "../controllers/carsControllers/FindCarByIdController";
import { FindCarByOrigemController } from "../controllers/carsControllers/FindCarByOrigemController";
import { FindCarsThatNameContainsController } from "../controllers/carsControllers/FindCarsThatNameContainsController";
import { ListCarsController } from "../controllers/carsControllers/ListCarsController";
import { UpdateCarController } from "../controllers/carsControllers/UpdateCarController";
import { userAuthenticated } from "../middlewares/userAuthenticated";

const carsRouter = Router();

const createCarController = new CreateCarController();
const deleteCarController = new DeleteCarController();
const findCarByIdController = new FindCarByIdController();
const findCarByOrigemController = new FindCarByOrigemController();
const findCarsThatNameContainsController = new FindCarsThatNameContainsController();
const listCarsController = new ListCarsController();
const updateCarController = new UpdateCarController();

carsRouter.post("/car", userAuthenticated, createCarController.handle);
carsRouter.post("/car/:id", userAuthenticated, deleteCarController.handle);

carsRouter.get("/car", userAuthenticated, findCarByIdController.handle)
carsRouter.get("/cars/findByOrigem", userAuthenticated, findCarByOrigemController.handle)
carsRouter.get("/cars/findByName", userAuthenticated, findCarsThatNameContainsController.handle)
carsRouter.get("/cars", userAuthenticated, listCarsController.handle)

carsRouter.put("/car", userAuthenticated, updateCarController.handle)

carsRouter.delete("/car/:id", userAuthenticated, deleteCarController.handle)


export { carsRouter };