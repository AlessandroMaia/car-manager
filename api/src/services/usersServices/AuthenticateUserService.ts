import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string,
    senha: string
}

class AuthenticateUserService {
    async execute({ email, senha }: IAuthenticateRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const user = await usersRepository.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect!")
        }

        const passwordMath = await compare(senha, user.senha);

        if (!passwordMath) {
            throw new Error("Email/Password incorrect!")
        }

        const token = sign({
            email: user.email
        }, process.env.SECRET,
        {
            subject: user.id,
            expiresIn: "1d"
        })

        return token
    }
}

export { AuthenticateUserService }