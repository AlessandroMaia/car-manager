import { getCustomRepository } from "typeorm";
import { BrandsRepositories } from "../../repositories/BrandsRepositories";

class FindBrandByIdService {
    async execute( id: string ) {
        const brandsRepositories = getCustomRepository(BrandsRepositories);

        const brand = await brandsRepositories.findOne({
            where: {
                id: id
            }
        });

        if (brand) {
            throw new Error("Brand does not exists!");
        }

        return brand;
    }
}

export{ FindBrandByIdService }