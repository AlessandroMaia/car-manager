import { Request, Response } from "express";
import { DeleteBrandService } from "../../services/brandsServices/DeleteBrandService";

class DeleteBrandController {
    async handle(req: Request, res: Response) {
        const  id  = req.params.id;

        const deleteBrandService = new DeleteBrandService();

        const brand = await deleteBrandService.execute( id );

        return res.json(brand);
    }
}

export { DeleteBrandController }