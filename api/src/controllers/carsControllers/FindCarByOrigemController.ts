import { Request, Response } from "express";
import { FindCarsByOrigemService } from "../../services/carsServices/FindCarsByOrigemService";

class FindCarByOrigemController {
    async handle(req: Request, res: Response) {
        const { origem } = req.body;

        const findCarsByOrigemService = new FindCarsByOrigemService();

        const cars = await findCarsByOrigemService.execute(origem);

        return res.json(cars);
    }
}

export { FindCarByOrigemController }