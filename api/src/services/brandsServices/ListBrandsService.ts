import { getCustomRepository } from "typeorm";
import { BrandsRepositories } from "../../repositories/BrandsRepositories";

class ListBrandsService {
    async execute( ) {
        const brandsRepositories = getCustomRepository(BrandsRepositories);

        const brands = await brandsRepositories.find();

        return brands;
    }
}

export { ListBrandsService }