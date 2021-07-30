import { getCustomRepository } from "typeorm";
import { BrandsRepositories } from "../../repositories/BrandsRepositories";


class UpdateBrandService {
    async execute(
        id: string,
        nome: string,
        origem: string
    ) {
        const brandsRepositories = getCustomRepository(BrandsRepositories);

        const brandToUpdate = await brandsRepositories.findOne(id);

        if (!brandToUpdate) {
            throw new Error("Brand does not exists!");
        }

        const brand = brandsRepositories.update(id,
            {
                nome,
                origem
            });

        return brand;
    }
}

export { UpdateBrandService }