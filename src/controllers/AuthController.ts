import { Controller, Post } from "@overnightjs/core";
import { Request, Response } from 'express';
@Controller('auth')
export class AuthController {
    @Post('login')
    private async login(req: Request, res: Response) {
        let { username, password } = req.body;
        let result;
        if (!(username && password)) {
            res.status(400).send();
        }
        if (!result) {
            res.send('Credentials Error');
        } else {
            res.setHeader('auth', result);
            res.send('Authenticated Successfully');
        }
    }
}