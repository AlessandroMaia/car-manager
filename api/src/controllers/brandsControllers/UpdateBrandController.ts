import { Request, Response } from "express";
import { UpdateBrandService } from "../../services/brandsServices/UpdateBrandService";

class UpdateBrandController {
    async handle(req: Request, res: Response) {
        const {id, nome, origem } = req.body;
        
        const updateBrandService = new UpdateBrandService();

        const brand = await updateBrandService.execute(id, nome, origem);

        return res.json(brand);
    }
}

export { UpdateBrandController }