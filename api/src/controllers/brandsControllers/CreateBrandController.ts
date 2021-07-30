import { Request, Response } from "express";
import { CreateBrandService } from "../../services/brandsServices/CreateBrandService";

class CreateBrandController {
    async handle(req: Request, res: Response) {
        const { nome, origem } = req.body;

        const createBrandService = new CreateBrandService();

        const brand = await createBrandService.execute( nome, origem );

        return res.json(brand);
    }
}

export { CreateBrandController }