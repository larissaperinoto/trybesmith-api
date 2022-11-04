import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IUser } from '../interfaces/IUser';

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
}
