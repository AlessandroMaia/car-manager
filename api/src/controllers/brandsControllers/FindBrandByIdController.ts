import { Request, Response } from "express";
import { FindBrandByIdService } from "../../services/brandsServices/FindBrandByIdService";

class FindBrandByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const findBrandByIdService = new FindBrandByIdService();

        const brands = await findBrandByIdService.execute(id);

        return res.json(brands);
    }
}

export { FindBrandByIdController }