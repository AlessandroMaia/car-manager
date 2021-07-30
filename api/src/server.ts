import express, { NextFunction, Request, Response } from "express";
import "./database";
import "reflect-metadata";
import "express-async-errors";
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "./swagger.json";
import { userRouter } from "./routes/UsersRoutes";
import { brandsRouter } from "./routes/BrandsRoutes";
import { carsRouter } from "./routes/CarsRoutes";
import cors from "cors";



const app = express();
app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(brandsRouter);
app.use(carsRouter);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
});

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))


app.listen(4000, () => console.log("Server is running"));