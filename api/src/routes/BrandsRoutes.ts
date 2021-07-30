import { Router } from "express";
import { CreateBrandController } from "../controllers/brandsControllers/CreateBrandController";
import { DeleteBrandController } from "../controllers/brandsControllers/DeleteBrandController";
import { FindBrandByIdController } from "../controllers/brandsControllers/FindBrandByIdController";
import { FindBrandByOrigemController } from "../controllers/brandsControllers/FindBrandByOrigemController";
import { FindBrandsThatNameContainsController } from "../controllers/brandsControllers/FindBrandsThatNameContainsController";
import { ListBrandsController } from "../controllers/brandsControllers/ListBrandsController";
import { UpdateBrandController } from "../controllers/brandsControllers/UpdateBrandController";
import { userAuthenticated } from "../middlewares/userAuthenticated";

const brandsRouter = Router();

const createBrandController = new CreateBrandController();
const deleteUserController = new DeleteBrandController();
const findBrandByIdController = new FindBrandByIdController();
const findBrandByOrigemController = new FindBrandByOrigemController();
const findBrandsThatNameContainsController = new FindBrandsThatNameContainsController();
const listBrandsController = new ListBrandsController();
const updateBrandController = new UpdateBrandController();

brandsRouter.post("/brand", createBrandController.handle);
brandsRouter.post("/brand/:id", userAuthenticated, deleteUserController.handle);

brandsRouter.get("/brands/:id", userAuthenticated, findBrandByIdController.handle)
brandsRouter.get("/brands/findByOrigem", userAuthenticated, findBrandByOrigemController.handle)
brandsRouter.get("/brands/findByName", userAuthenticated, findBrandsThatNameContainsController.handle)
brandsRouter.get("/brands", userAuthenticated, listBrandsController.handle)

brandsRouter.put("/brand", userAuthenticated, updateBrandController.handle)

brandsRouter.delete("/brand/:id", userAuthenticated, deleteUserController.handle)


export { brandsRouter };