import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();  // This is the default strategy, so we don't need to pass any options
    }
    // This is the function that will be called when we call req.login()
    async validate(email: string, password: string): Promise<any> {
        // This is where we validate the user
        const user = await this.authService.validateUser(email, password);
        // If the user is not found, throw an error
        if (!user) {
            throw new UnauthorizedException();
        }
        // If the user is found, return the user
        return user;
    }
}