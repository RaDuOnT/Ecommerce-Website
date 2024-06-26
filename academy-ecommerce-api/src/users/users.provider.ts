import { Connection } from 'mongoose';

import { UserSchema } from './user.schema';
import { USERS_MODEL_PROVIDER, DB_PROVIDER } from '../constants/constants';

export const usersProvider = [
    {
        provide: USERS_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Users: ', UserSchema),
        inject: [DB_PROVIDER],
    },
];