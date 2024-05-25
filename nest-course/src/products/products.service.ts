import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private productModel: typeof Product,
    private sequelize: Sequelize,
  ) {}

  async createProduct(dto: any): Promise<Product> {
    const product = await this.productModel.create(dto);
    return product;
  }

  async getAllProducts(): Promise<Product[]> {
    const products = await this.productModel.findAll();
    return products;
  }

}