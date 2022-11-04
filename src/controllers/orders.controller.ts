import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class ProductsController {
  public ordersService = new OrdersService();

  public async findAll(_req: Request, res: Response) {
    const orders = await this.ordersService.findAll();
    res.status(200).json(orders);
  }
}