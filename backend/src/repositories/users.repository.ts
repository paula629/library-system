import { prisma } from "../database/prisma.js";

export class UsersRepository {

    getAllUsers(){
        return prisma.user.findMany();
    }

    createUser(data: {
        name: string;
        email: string;
        password: string;
    }) {
        return prisma.user.create({
            data
        });
    }

}