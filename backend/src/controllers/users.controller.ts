import { Response, Request } from "express";
import { UsersService } from "../services/users.service.js";
import { UsersRepository } from "../repositories/users.repository.js";

const usersRepository = new UsersRepository();

const userService = new UsersService(usersRepository);

export const getUsers =async (_req: Request, res: Response) => {
    const users =await userService.getAllUsers();

    res.json({
        status: "ok",
        data: users
    });
};
export const createUser = async (req: Request, res: Response) => {

    const user = await userService.createUser(req.body);

    res.status(201).json({
        status: "ok",
        data: user
    });
};
