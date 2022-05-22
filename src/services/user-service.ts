import { IUser } from "models/interfaces/types";
import userRepository from "../repositories/user.repository";
import User from "../models/user";

/**
 * @description : Get all users
 * @returns { Response<User> }
 */

class UserService {
  async getUsers() {
    try {
      const users = userRepository.findAll();
      return users;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  /**
   * @description : Get one user
   * @returns { Response<User> }
   */

  async getUser(id: string): Promise<IUser> {
    try {
      const user = await userRepository.findById(id);
      return user;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  /**
   * @description : Create one user
   * @param body
   * @returns { Response<User> }
   */

  async createUser(body: IUser): Promise<IUser> {
    const { first_name, last_name, date_of_birth } = body;
    try {
      const newUser = new User({
        first_name,
        last_name,
        date_of_birth,
      });
      return userRepository.create(newUser);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  /**
   * @description : Update one user
   * @param id
   * @param body
   * @returns { Response<User> }
   */

  async updateUser(id: string, body: IUser): Promise<IUser> {
    try {
      const updateUser = await userRepository.update(id, body);
      return await updateUser.save();
    } catch (error: any) {
      throw new Error(error);
    }
  }

  /**
   * @description : Delete one user
   * @param id
   * @returns { Response }
   */

  async deleteUser(id: string) {
    try {
      const deleteUser = await userRepository.delete(id);
      return deleteUser;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new UserService();
