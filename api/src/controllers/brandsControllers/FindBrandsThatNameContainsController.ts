import { Request, Response } from "express";
import { FindBrandsThatNameContainsService } from "../../services/brandsServices/FindBrandsThatNameContainsService";

class FindBrandsThatNameContainsController {
    async handle(req: Request, res: Response) {
        const { nome } = req.body;

        const findBrandsThatNameContainsService = new FindBrandsThatNameContainsService();

        const brands = await findBrandsThatNameContainsService.execute(nome);

        return res.json(brands);
    }
}

export { FindBrandsThatNameContainsController }