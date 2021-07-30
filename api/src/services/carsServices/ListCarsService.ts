import { getCustomRepository } from "typeorm";
import { CarsRepositories } from "../../repositories/CarsRepositories";

class ListCarsService {
    async execute( ) {
        const carsRepositories = getCustomRepository(CarsRepositories);

        const cars = await carsRepositories.find();

        return cars;
    }
}

export { ListCarsService }