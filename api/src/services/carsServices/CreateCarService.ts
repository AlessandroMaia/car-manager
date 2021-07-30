import { getCustomRepository } from "typeorm"
import { CarsRepositories } from "../../repositories/CarsRepositories"

class CreateCarService {
    async execute(
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

        const car = carsRepositories.create({
            nome, 
            km_por_galao, 
            cilindros, 
            peso, 
            aceleracao, 
            ano, 
            origem, 
            marca_id
        });

        await carsRepositories.save(car)

        return car;
    }
}

export { CreateCarService }