import { EntityRepository, Repository } from "typeorm";
import { Users } from "../models/Users";

@EntityRepository(Users)
class UsersRepositories extends Repository<Users> {
    
}

export { UsersRepositories };