import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    ProductsModule,
    AddressModule,
    MongooseModule.forRoot(
      'mongodb+srv://kartikey-admin:kartikey@blog.dbo4a.mongodb.net/nestJs?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
