import { UsersRepository } from "../repositories/users.repository.js";
import { userMapper } from "../utils/user.mapper.js";
import { CreateUserInput } from "../schemas/user.schema.js";
import bcrypt from "bcrypt";
import { AppError } from "../errors/AppError.js";

export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async getAllUsers() {
    const users = await this.usersRepository.getAllUsers();

    return users.map(userMapper);
  }

async createUser(data: CreateUserInput) {

  try {

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.usersRepository.createUser({
      ...data,
      password: hashedPassword,
    });

    return userMapper(user);

  } catch (error: any) {

    if (error.code === "P2002") {

      throw new AppError(
        "El email ya está registrado",
        409
      );

    }

    throw error;

  }

}
}