import { Connection } from 'mongoose';

import { ReviewSchema } from './reviews.schema';
import { REVIEWS_MODEL_PROVIDER, DB_PROVIDER } from '../constants/constants';

export const reviewsProvider = [
    {
        provide: REVIEWS_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Reviews', ReviewSchema),
        inject: [DB_PROVIDER],
    },
];