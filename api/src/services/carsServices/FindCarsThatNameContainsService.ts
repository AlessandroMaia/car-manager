import { getCustomRepository } from "typeorm";
import { CarsRepositories } from "../../repositories/CarsRepositories";

class FindCarsThatNameContainsService {
    async execute(nome: string) {
        const carsRepositories = getCustomRepository(CarsRepositories);

        const cars = await carsRepositories.find({
            select: ["nome", "origem", "ano"],
            where: `nome LIKE '%${nome}%'`,
            relations: ["marcaId"]
        })

        console.log(cars)

        return cars;
    }
}

export { FindCarsThatNameContainsService }