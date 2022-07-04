import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly product: Model<Product>,
  ) {}

  async insertProduct(title: string, description: string, price: number) {
    const insertedProduct = new this.product({
      title,
      description,
      price,
    });

    await insertedProduct.save();
    console.log(insertedProduct);
    return insertedProduct;
  }

  async getAllProducts() {
    const allProduct = await this.product.find({}).exec();
    return allProduct as Product[];
  }

  async getOneProduct(id: string) {
    const product = await this.product.findById(id);
    if (!product) {
      throw new NotFoundException('product not found');
    }
    return product;
  }

  async deleteOneProduct(id: string) {
    const deletedProduct = await this.product.findByIdAndDelete(id);
    return { message: 'deleted product successfully', deletedProduct };
  }
}
