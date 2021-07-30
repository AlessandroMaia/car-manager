import { Request, Response } from "express";
import { DeleteCarService } from "../../services/carsServices/DeleteCarService";

class DeleteCarController {
    async handle(req: Request, res: Response) {
        const  id  = req.params.id;

        const deleteCarService = new DeleteCarService();

        const car = await deleteCarService.execute( id );

        return res.json(car);
    }
}

export { DeleteCarController  }