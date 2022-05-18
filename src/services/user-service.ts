import { IUser } from "models/interfaces/types";
import User from "../models/user";
import { Response } from "express";

/**
 * @description : Get all users
 * @returns { Response<User> }
 */

class UserService {
  async getUsers() {
    try {
      const users = await User.find();
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
      const user = await User.findById(id);
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
      return await newUser.save();
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
      const updateUser = await User.findByIdAndUpdate(id, body);
      return await updateUser.save();
    } catch (error: any) {
      throw new Error(error);
    }
  }

  /**
   * @description : Delete one user
   * @param id
   * @returns { Response<User> }
   */

  async deleteUser(id: string): Promise<IUser> {
    try {
      const deleteUser = await User.findByIdAndDelete(id);
      return deleteUser;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new UserService();
