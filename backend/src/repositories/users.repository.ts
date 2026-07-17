import { prisma } from "../database/prisma.js";
import { Prisma } from "../generated/prisma/index.js";

export class UsersRepository {

    getAllUsers() {
        return prisma.user.findMany();
    }


    createUser(data: Prisma.UserCreateInput) {
        return prisma.user.create({
            data
        });
    }

}