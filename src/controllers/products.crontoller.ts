import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  public productsService = new ProductsService();

  public async findAll(_req: Request, res: Response) {
    const products = await this.productsService.findAll();
    res.status(200).json(products);
  }
}