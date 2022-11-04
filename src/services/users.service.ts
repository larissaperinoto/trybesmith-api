import jsonwebtoken from 'jsonwebtoken';
import UsersModel from '../models/users.model';
import { IUser } from '../interfaces/IUser';

export default class UsersService {
  public users = new UsersModel();

  public jwt = jsonwebtoken;

  public async insert(user: IUser) {
    const newUser = await this.users.insert(user);

    return this.generateToken(newUser);
  }

  public generateToken(user:IUser) {
    const payload = { id: user.id, email: user.username };
    return this.jwt.sign(payload, process.env.JWT_SECRET as string);
  }
}