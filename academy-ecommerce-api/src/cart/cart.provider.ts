import { Connection } from 'mongoose';

import { CartSchema } from './cart.schema';
import { CART_MODEL_PROVIDER, DB_PROVIDER } from '../constants/constants';

export const cartProvider = [
  {
    provide: CART_MODEL_PROVIDER,
    useFactory: (connection: Connection) =>
      connection.model('Carts', CartSchema),
    inject: [DB_PROVIDER],
  },
];
