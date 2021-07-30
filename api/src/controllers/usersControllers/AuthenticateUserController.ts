import { Request, Response } from "express";
import { AuthenticateUserService } from "../../services/usersServices/AuthenticateUserService";

class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body;

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({
            email,
            senha
        })

        return res.json(token);
    }
}

export { AuthenticateUserController } 