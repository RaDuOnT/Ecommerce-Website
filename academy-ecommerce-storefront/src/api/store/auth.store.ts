import { makeAutoObservable } from "mobx";
import { LoggedUser } from "../models/loggedUser";
import { LoginRequest } from "../models/login-request";
import { AuthService } from "../services/authService";
import { makePersistable, stopPersisting } from 'mobx-persist-store';

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
            console.log(tokenPayload)
            if (tokenPayload.access_token ) {
                this.authenticated = true;
                this.currentUser.email = tokenPayload.email;
                this.currentUser.phoneNumber = tokenPayload.phoneNumber;
                this.currentUser.id = tokenPayload.userId;
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
