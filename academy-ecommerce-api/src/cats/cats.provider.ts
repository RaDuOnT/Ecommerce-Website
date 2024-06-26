import { Connection } from 'mongoose';

import { CatsSchema } from './cats.schema';
import { CATS_MODEL_PROVIDER, DB_PROVIDER } from '../constants/constants';

export const catsProvider = [
    {
        provide: CATS_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Cats', CatsSchema),
        inject: [DB_PROVIDER],
    },
];