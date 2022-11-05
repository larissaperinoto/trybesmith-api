import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IUser } from '../interfaces/IUser';
import ILogin from '../interfaces/ILogin';

export default class UsersModel {
  private connection = mysql;

  async insert(user: IUser) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES(?, ?, ?, ?)',
      [user.username, user.classe, user.level, user.password],
    );

    const newUser = { id: insertId, ...user };

    return newUser;
  }

  async findUserByUsernameAndPassword(login:ILogin): Promise<IUser[] | null> {
    const { username, password } = login;
    const [rows] = await this.connection.execute<IUser[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );

    return rows;
  }
}
