import { Request, Response } from "express";
import { FindBrandByOrigemService } from "../../services/brandsServices/FindBrandByOrigemService";

class FindBrandByOrigemController {
    async handle(req: Request, res: Response) {
        const { origem } = req.body;

        const findBrandByOrigemService = new FindBrandByOrigemService();

        const brands = await findBrandByOrigemService.execute(origem);

        return res.json(brands);
    }
}

export { FindBrandByOrigemController }