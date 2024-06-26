import { Connection } from 'mongoose';

import { OrdersSchema } from './orders.schema';
import { ORDERS_MODEL_PROVIDER, DB_PROVIDER } from '../constants/constants';

export const ordersProvider = [
    {
        provide: ORDERS_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Orders', OrdersSchema),
        inject: [DB_PROVIDER],
    },
];