import { makeAutoObservable } from "mobx";
import { AuthService } from "../services/authRequests.special";
import { makePersistable, stopPersisting } from 'mobx-persist-store';

interface LoginRequest{
  readonly username: string;
  readonly password: string;
}

interface LoggedUser {
  id: string;
  email: string;
  phoneNumber: string;
}

export class AuthStore{
    authenticated = false;
    currentUser: LoggedUser = {} as LoggedUser;
  
    constructor(private readonly authService: AuthService){
        makeAutoObservable(this);
        makePersistable(this, { name: 'AuthenticatedCustomer', properties: ['currentUser', 'authenticated'], storage: window.localStorage });
    }

    async login(loginRequest: LoginRequest){

        try{    

            const tokenPayload = await this.authService.login(loginRequest);
            if (tokenPayload.access_token && tokenPayload.email.includes('admin@admin.com') && tokenPayload._id === '1A$') {
                this.authenticated = true;
                this.currentUser.email = tokenPayload.email;
                this.currentUser.id = tokenPayload._id;
                localStorage.setItem("access_token", tokenPayload.access_token);
                stopPersisting(this);
            }else{
                this.setAuthenticated(false);
                this.currentUser = {} as LoggedUser;
            }
        }catch(error){
            this.setAuthenticated(false);
            this.currentUser = {} as LoggedUser;
        }
   
    }
    async logout(){
        localStorage.removeItem('access_token');
        this.currentUser = {} as LoggedUser;
    }


    private setAuthenticated(authenticated: boolean){
        this.authenticated = authenticated;
    }
    isAuthenticated(){
        return this.authenticated;
    }
}
