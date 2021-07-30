import { Request, Response } from "express";
import { ListBrandsService } from "../../services/brandsServices/ListBrandsService";

class ListBrandsController {
    async handle(req: Request, res: Response) {
        const listBrandsService = new ListBrandsService();

        const brands = await listBrandsService.execute()

        return res.json(brands);
    }
}

export { ListBrandsController }