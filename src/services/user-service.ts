import { IUser } from "models/interfaces/types";
import userRepository from "../repositories/user-repository";

/**
 * @description : Get all users
 * @returns { Response<User> }
 */

class UserService {
  async getUsers() {
    try {
      return userRepository.findAll();
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
      return userRepository.findById(id);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  /**
   * @description : Create one user
   * @param user
   * @returns { Response<User> }
   */

  async createUser(user: IUser): Promise<IUser> {
    try {
      return userRepository.create(user);
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
      return userRepository.update(id, body);
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
      return userRepository.delete(id);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new UserService();
