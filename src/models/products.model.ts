import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IProduct } from '../interfaces/IProducts';

export default class ProductsModel {
  private connection = mysql;

  async findAll(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );

    return rows;
  }

  async insert(product: IProduct): Promise<IProduct> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products(name, amount) VALUES(?, ?)',
      [product.name, product.amount],
    );

    const newProduct = { id: insertId, ...product };

    return newProduct;
  }
}
