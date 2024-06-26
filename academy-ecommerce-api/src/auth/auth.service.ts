import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/utils/bcrypt';
import { ADMIN_LOGIN } from './constants';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, password: string): Promise<any> {
        
        if (
            email === ADMIN_LOGIN.email &&
            comparePassword(password, ADMIN_LOGIN.password)
        ) {
            return ADMIN_LOGIN;
        } else {
            const user = await this.usersService.findByEmail(email);
            if (user) {
                // const {password, ...result} = user;
                const isMatch = comparePassword(password, user.password);
                const returnedUser = { userId: user._id, email: user.email, phoneNumber: user.phoneNumber };
                if (isMatch) {
                    return returnedUser;
                } else {
                    console.log('password is not match')
                }
            }
        }
        return null;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.userId, roles: user.roles ? user.roles : 'user' };
        return {
            access_token: this.jwtService.sign(payload),
        };

    }

}
