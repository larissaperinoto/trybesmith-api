import OrdersModel from '../models/orders.model';

export default class OrderService {
  public orders = new OrdersModel();

  public async findAll() {
    const orders = await this.orders.findAll();

    return orders;
  }
}