import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IUserRequest {
    nome: string;
    email: string;
    senha: string;
}

class CreateUserService {
    async execute({ nome, email, senha }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if (!email) {
            throw new Error("Incorrect email!");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }

        const passwordHash = await hash(senha, 8);

        const user = usersRepository.create({
            nome,
            email,
            senha: passwordHash
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }