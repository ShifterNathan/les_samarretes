import { User } from 'src/users/entities/user.entity';
import { ValidRoles } from '../auth/interfaces/validRoles';

export class MOCKS {
  readonly MOCK_USER_BUYER = MOCK_USER_BUYER;
  readonly MOCK_USER_ADMIN = MOCK_USER_ADMIN;
}

const MOCK_USER_BUYER: User = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  password: 'password',
  roles: [ValidRoles.user],
  createdAt: new Date(),
};

const MOCK_USER_ADMIN: User = {
  id: '2',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john2@example.com',
  password: 'password',
  roles: [ValidRoles.userAdmin],
  createdAt: new Date(),
};
  
