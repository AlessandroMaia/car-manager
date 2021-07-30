import { getCustomRepository } from "typeorm";
import { BrandsRepositories } from "../../repositories/BrandsRepositories";

class FindBrandsThatNameContainsService {
    async execute(nome: string) {
        const brandRepositories = getCustomRepository(BrandsRepositories);

        const brans = await brandRepositories.find({
            where: `nome LIKE '%${nome}%'`
        })

        return brans;
    }
}

export { FindBrandsThatNameContainsService }