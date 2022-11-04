import ProductsModel from '../models/products.model';
import { IProduct } from '../interfaces/IProducts';

export default class ProductsService {
  public products = new ProductsModel();

  public async findAll(): Promise<IProduct[]> {
    const products = await this.products.findAll();
    return products;
  }
}