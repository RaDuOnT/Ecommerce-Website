import React, { createContext } from 'react';
import { AuthService } from './api/services/authService';
import { AuthStore } from './api/store/auth.store';

export interface IStoreContext {
    authStore: AuthStore;
}
const authService = new AuthService();
const authStore = new AuthStore(authService);

export const StoreContext = React.createContext<IStoreContext>({
    authStore,
});

