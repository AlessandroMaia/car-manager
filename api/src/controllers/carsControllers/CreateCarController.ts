import { Request, Response } from "express";
import { CreateCarService } from "../../services/carsServices/CreateCarService";

class CreateCarController {
    async handle(req: Request, res: Response) {
        const { nome, km_por_galao, cilindros, peso, aceleracao, ano, origem, marca_id } = req.body;

        const createCarService = new CreateCarService();

        const car = await createCarService.execute( nome, km_por_galao, cilindros, peso, aceleracao, ano, origem, marca_id );

        return res.json(car);
    }
}

export { CreateCarController }