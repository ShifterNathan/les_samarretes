import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { User } from "../../users/entities/user.entity";
import { JWTPayload } from "../interfaces/jwt-payload.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ExtractJwt } from "passport-jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {
        super({
            secretOrKey: process.env.JWT_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() 
        })
    }

    async validate(payload: JWTPayload): Promise<User> {
        
        const { email } = payload;

        const user = await this.userRepository.findOneBy({ email });
        if (!user) throw new UnauthorizedException("Token not valid");
        if (user.deletedAt !== null) throw new UnauthorizedException("User deleted, talk with admin");
        
        return user;
    }
}
