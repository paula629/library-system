import { Response, Request } from "express";
import { UsersService } from "../services/users.service.js";
import { UsersRepository } from "../repositories/users.repository.js";
import { CreateUserInput } from "../schemas/user.schema.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const usersRepository = new UsersRepository();

const userService = new UsersService(usersRepository);


export const getUsers = asyncHandler(
  async (
    _req: Request,
    res: Response
  ) => {

    const users = await userService.getAllUsers();

    res.json({
      status: "ok",
      data: users
    });

  }
);


export const createUser = asyncHandler(
  async (
    req: Request<{}, {}, CreateUserInput>,
    res: Response
  ) => {

    const user = await userService.createUser(req.body);

    res.status(201).json({
      status: "ok",
      data: user
    });

  }
);