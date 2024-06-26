import React, { createContext } from 'react';
import { AuthService } from './services/authRequests.special';
import { AuthStore } from './stores/authStore';

export interface IStoreContext {
    authStore: AuthStore;
}
const authService = new AuthService();
const authStore = new AuthStore(authService);

export const StoreContext = React.createContext<IStoreContext>({
    authStore,
});

