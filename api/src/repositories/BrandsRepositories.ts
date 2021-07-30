import { EntityRepository, Repository } from "typeorm";
import { Brands } from "../models/Brands";

@EntityRepository(Brands)
class BrandsRepositories extends Repository<Brands> {

}

export { BrandsRepositories }