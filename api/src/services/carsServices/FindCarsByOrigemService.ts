import { getCustomRepository } from "typeorm";
import { CarsRepositories } from "../../repositories/CarsRepositories";

class FindCarsByOrigemService {
    async execute( origem: string ) {
        const carsRepositories = getCustomRepository(CarsRepositories);

        const car = await carsRepositories.find({
            select: ["nome", "origem", "ano"],
            where: {
                origem: origem
            },
            relations: ["marcaId"]
        });

        if (car) {
            throw new Error("Car does not exists!");
        }

        return car;
    }
}

export{ FindCarsByOrigemService }