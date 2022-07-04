import { Body, Controller, Post } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('addAddress')
  async addAdress(
    @Body('flatno') flatno: number,
    @Body('streetName') streetName: string,
  ) {
    const insertedAdress = await this.addressService.addAdress(
      flatno,
      streetName,
    );

    return insertedAdress;
  }
}
