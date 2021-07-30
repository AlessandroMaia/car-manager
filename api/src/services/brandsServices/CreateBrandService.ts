import { getCustomRepository } from "typeorm"
import { BrandsRepositories } from "../../repositories/BrandsRepositories";

class CreateBrandService {
    async execute(
        nome: string, 
        origem: string
    ) {
        const brandsRepositories = getCustomRepository(BrandsRepositories);

        const brand = brandsRepositories.create({
            nome, 
            origem
        });

        await brandsRepositories.save(brand)

        return brand;
    }
}

export { CreateBrandService }