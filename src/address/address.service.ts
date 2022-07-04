import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address } from './address.model';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel('Address') private readonly address: Model<Address>,
  ) {}

  async addAdress(flatno: number, streetName: string): Promise<Address> {
    const newAddress = new this.address({ flatno, streetName });

    await newAddress.save();
    return newAddress;
  }
}
