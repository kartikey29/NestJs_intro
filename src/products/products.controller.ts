import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post('addProduct')
  async addNewProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    return await this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
  }

  @Get('getAllProducts')
  async getAllProducts(): Promise<Product[]> {
    return await this.productService.getAllProducts();
  }

  @Get('findOneProduct/:id')
  async findOneProduct(@Param('id') id: string) {
    return await this.productService.getOneProduct(id);
  }

  @Delete('deleteOneProduct/:id')
  async deleteOneProduct(@Param('id') id: string) {
    return this.productService.deleteOneProduct(id);
  }
}
