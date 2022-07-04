import * as mongoose from 'mongoose';

export const addressSchema = new mongoose.Schema({
  flatno: {
    type: Number,
    required: true,
  },
  streetName: {
    type: String,
    required: true,
  },
});

export interface Address {
  id: string;
  flatno: number;
  streetName: string;
}
