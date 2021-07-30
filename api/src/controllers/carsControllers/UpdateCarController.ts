import { Request, Response } from "express";
import { UpdateCarService } from "../../services/carsServices/UpdateCarService";

class UpdateCarController {
    async handle(req: Request, res: Response) {
        const {id, nome, km_por_galao, cilindros, peso, aceleracao, ano, origem, marca_id } = req.body;

        const updateCarService = new UpdateCarService();

        const car = await updateCarService.execute(id, nome, km_por_galao, cilindros, peso, aceleracao, ano, origem, marca_id);

        return res.json(car);
    }
}

export { UpdateCarController }