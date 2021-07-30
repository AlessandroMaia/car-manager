import { Request, Response } from "express";
import { FindCarByIdService } from "../../services/carsServices/FindCarByIdService";

class FindCarByIdController {
    async handle(req: Request, res: Response) {
        const  id  = req.body.id;

        const findCarByIdService = new FindCarByIdService();

        const car = await findCarByIdService.execute(id);

        return res.json(car);
    }
}

export { FindCarByIdController }