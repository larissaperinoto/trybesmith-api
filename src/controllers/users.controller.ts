import { NextFunction, Request, Response } from 'express';
import ILogin from '../interfaces/ILogin';
import UsersService from '../services/users.service';

export default class UsersController {
  public UsersService = new UsersService();

  public async insert(req: Request, res: Response) {
    const token = await this.UsersService.insert(req.body);
    res.status(201).json({ token });
  }

  public async login(req: Request<object, object, ILogin>, res: Response, next: NextFunction) {
    const { body } = req;
    const token = await this.UsersService.login(body, next);
    if (token) return res.status(200).json({ token });
  }
}