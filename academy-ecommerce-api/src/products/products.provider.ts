import { Connection } from 'mongoose';

import { ProductSchema } from './products.schema';
import { PRODUCTS_MODEL_PROVIDER, DB_PROVIDER } from '../constants/constants';

export const productsProvider = [
  {
    provide: PRODUCTS_MODEL_PROVIDER,
    useFactory: (connection: Connection) =>
      connection.model('Products', ProductSchema),
    inject: [DB_PROVIDER],
  },
];
