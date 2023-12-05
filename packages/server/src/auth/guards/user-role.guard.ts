import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { User } from "../../users/entities/user.entity";
import { META_ROLES } from "../decorators/role-protected.decorator";

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles = this.reflector.get<string[]>(
      META_ROLES,
      context.getHandler()
    );
    if (!validRoles) return true;
    if (validRoles.length === 0) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user as User;
    if (!user) throw new BadRequestException("No user found");

    for (const role of user.roles) {
      if (validRoles.includes(role)) return true;
    }

    throw new ForbiddenException(
      "You don't have permission to access this resource"
    );
  }
}
