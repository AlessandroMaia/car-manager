import { Router } from "express";
import { AuthenticateUserController } from "../controllers/usersControllers/AuthenticateUserController";
import { CreateUserController } from "../controllers/usersControllers/CreateUserController";

const userRouter = Router();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

userRouter.post("/login", authenticateUserController.handle);
userRouter.post("/user", createUserController.handle);


export { userRouter };