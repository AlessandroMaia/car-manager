import { getCustomRepository } from "typeorm";
import { CarsRepositories } from "../../repositories/CarsRepositories";

class DeleteCarService {
    async execute( id: string ) {
        const carsRepositories = getCustomRepository(CarsRepositories);

        const carToDelete = await carsRepositories.findOne(id);


        if (!carToDelete) {
            throw new Error("Car does not exists!");
        }

        const car = carsRepositories.delete(id);

        return car;
    }
}

export { DeleteCarService }