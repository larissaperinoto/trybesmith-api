import ProductsModel from '../models/products.model';
import { IProduct } from '../interfaces/IProducts';

export default class ProductsService {
  public products = new ProductsModel();

  public async findAll(): Promise<IProduct[]> {
    const products = await this.products.findAll();
    return products;
  }

  public async insert(product: IProduct): Promise<IProduct> {
    const newProduct = await this.products.insert(product);
    return newProduct;
  }
}