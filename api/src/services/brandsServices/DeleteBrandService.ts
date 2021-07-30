import { getCustomRepository } from "typeorm";
import { BrandsRepositories } from "../../repositories/BrandsRepositories";

class DeleteBrandService {
    async execute( id: string ) {
        const brandsRepositories = getCustomRepository(BrandsRepositories);

        const brandToDelete = await brandsRepositories.findOne(id);

        if (!brandToDelete) {
            throw new Error("Brand does not exists!");
        }

        const brand = brandsRepositories.delete(id);

        return brand;
    }
}

export { DeleteBrandService }