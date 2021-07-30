import { getCustomRepository } from "typeorm";
import { BrandsRepositories } from "../../repositories/BrandsRepositories";


class FindBrandByOrigemService {
    async execute( origem: string ) {
        const brandsRepositories = getCustomRepository(BrandsRepositories);

        const brand = await brandsRepositories.find({
            where: {
                origem: origem
            }
        });

        if (brand) {
            throw new Error("Car does not exists!");
        }

        return brand;
    }
}

export{ FindBrandByOrigemService }