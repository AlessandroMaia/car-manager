import { EntityRepository, Repository } from "typeorm";
import { Cars } from "../models/Cars";

@EntityRepository(Cars)
class CarsRepositories extends Repository<Cars> {

}

export { CarsRepositories }