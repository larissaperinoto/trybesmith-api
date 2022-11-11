import OrdersModel from '../models/orders.model';

type Response = {
  userId: number;
  productsIds: number[];
};

export default class OrderService {
  public orders = new OrdersModel();

  public async findAll() {
    const orders = await this.orders.findAll();
    return orders;
  }

  public async insert(productsIds: number[], userId: number): Promise<Response> {
    const newProduct = await this.orders.insert(productsIds, userId);
    return newProduct as unknown as Response;
  }
}