import { getCustomRepository } from "typeorm";
import { CarsRepositories } from "../../repositories/CarsRepositories";

class UpdateCarService {
    async execute(
        id: string,
        nome: string,
        km_por_galao: string,
        cilindros: string,
        peso: string,
        aceleracao: string,
        ano: string,
        origem: string,
        marca_id: string
    ) {
        const carsRepositories = getCustomRepository(CarsRepositories);

        const carToUpdate = await carsRepositories.findOne(id);

        if (!carToUpdate) {
            throw new Error("Car does not exists!");
        }

        const car = carsRepositories.update(id,
            {
                nome,
                km_por_galao,
                cilindros,
                peso,
                aceleracao,
                ano,
                origem,
                marca_id
            });

        return car;
    }
}

export { UpdateCarService }