import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressController } from './address.controller';
import { addressSchema } from './address.model';
import { AddressService } from './address.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Address', schema: addressSchema }]),
  ],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
