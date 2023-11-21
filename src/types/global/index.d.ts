import { User as UserModel } from '@prisma/client';

declare global {
    namespace Express {
        export interface User extends UserModel {}
    }
}
