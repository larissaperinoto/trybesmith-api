import jsonwebtoken from 'jsonwebtoken';
import UsersModel from '../models/users.model';
import { IUser } from '../interfaces/IUser';
import ILogin from '../interfaces/ILogin';

export default class UsersService {
  public users = new UsersModel();

  public jwt = jsonwebtoken;

  public async insert(user: IUser) {
    const newUser = await this.users.insert(user);

    return this.generateToken(newUser);
  }

  public async login(login:ILogin) {
    const user = await this.users.findUserByUsernameAndPassword(login);

    if (!user || user.length === 0) {
      // throw new HttpException(401, 'Username or password invalid'); Descrobrir pq não funciona :,(
      return { status: 401, message: { message: 'Username or password invalid' } };
    }

    return { status: 200, message: { token: this.generateToken(user[0]) } };
  }

  public generateToken(user:IUser) {
    const payload = { id: user.id, username: user.username };
    const secret = process.env.JWT_SECRET as string;
    return this.jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn: '1d' });
  }
}