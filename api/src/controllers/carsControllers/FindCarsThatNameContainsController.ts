import { Request, Response } from "express";
import { FindCarsThatNameContainsService } from "../../services/carsServices/FindCarsThatNameContainsService";

class FindCarsThatNameContainsController {
    async handle(req: Request, res: Response) {
        const { nome } = req.body;

        const findCarsThatNameContainsService = new FindCarsThatNameContainsService();

        const cars = await findCarsThatNameContainsService.execute(nome);

        return res.json(cars);
    }
}

export { FindCarsThatNameContainsController }