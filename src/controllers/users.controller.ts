import { Request, Response } from 'express';
import UsersService from '../services/users.service';

export default class UsersController {
  public UsersService = new UsersService();

  public async insert(req: Request, res: Response) {
    const token = await this.UsersService.insert(req.body);
    res.status(201).json({ token });
  }
}