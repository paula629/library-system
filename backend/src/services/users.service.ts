import { UsersRepository } from "../repositories/users.repository.js";
import { userMapper } from "../utils/user.mapper.js";
import bcrypt from "bcrypt";

export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
// funcion que devuelve los usuarios
  async getAllUsers() {
    const users = await this.usersRepository.getAllUsers();

    return users.map(userMapper);
  }
// funcion post para crear usuarios
  async createUser(data: { name: string; email: string; password: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.usersRepository.createUser({
      ...data,
      password: hashedPassword,
    });
  }
}
