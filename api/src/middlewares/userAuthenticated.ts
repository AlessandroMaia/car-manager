import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function userAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    const [bearer, token] = authToken.split(" ")

    try {
        const { sub } = verify(token, "076c54021facfe5afc3434945422c7af") as IPayload;

        req.user_id = sub;

        return next();
    } catch (err) {
        return res.status(401).end();
    }

}