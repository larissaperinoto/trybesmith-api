import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  public productsService = new ProductsService();

  public async findAll(_req: Request, res: Response) {
    const products = await this.productsService.findAll();
    res.status(200).json(products);
  }

  public async insert(req: Request, res: Response) {
    const newProduct = await this.productsService.insert(req.body);
    res.status(201).json(newProduct);
  }
}