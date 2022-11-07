import { RowDataPacket, ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IOrder } from '../interfaces/IOrder';

export default class ProductsModel {
  private connection = mysql;

  async findAll(): Promise<IOrder[]> {
    const [rows] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) as productsIds
      FROM Trybesmith.Orders as orders
      INNER JOIN Trybesmith.Products as products ON orders.id = products.orderId
      GROUP BY orders.id`,
    );

    return rows;
  }

  async insert(productsIds: number[], userId: number) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES(?)',
      [userId],
    );

    const updateOrderIdInProducts = productsIds.map((productId) => {
      const update = this.connection.execute(
        'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
        [insertId, productId],
      );
      return update;
    });

    await Promise.all(updateOrderIdInProducts);
    return { userId, productsIds };
  }
}
