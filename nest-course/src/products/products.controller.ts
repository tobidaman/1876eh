import {
    Controller,
    Post,
    Body,
    Get,
    HttpCode,
    HttpStatus,
  } from '@nestjs/common';
  import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './products.service';
  
  @Controller('product')
  export class ProductController {
    constructor(private productService: ProductService) {}
  
    @Post()
    async createProduct(@Body() dto: CreateProductDto) {
      const product = await this.productService.createProduct(dto);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Product created successfully',
        data: product,
      };
    }
  
    @HttpCode(HttpStatus.OK)
    @Get()
    async getAllProducts() {
      const products = await this.productService.getAllProducts();
      return {
        statusCode: HttpStatus.OK,
        message: 'Products fetched successfully',
        data: products,
      };
    }
  
    // Добавьте другие методы, если необходимо
  }
  