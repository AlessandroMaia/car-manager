import { Request, Response } from "express";
import { ListCarsService } from "../../services/carsServices/ListCarsService";

class ListCarsController {
    async handle(req: Request, res: Response) {
        const listCarsService = new ListCarsService();

        const cars = await listCarsService.execute()

        return res.json(cars);
    }
}

export { ListCarsController }