import { getCustomRepository } from "typeorm";
import { CarsRepositories } from "../../repositories/CarsRepositories";

class FindCarByIdService {
    async execute( id: string ) {
        const carsRepositories = getCustomRepository(CarsRepositories);

        const car = await carsRepositories.findOne(id);

        if (!car) {
            throw new Error("Car does not exists!");
        }

        return car;
    }
}

export{ FindCarByIdService }