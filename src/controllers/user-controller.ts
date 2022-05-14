import { Request, Response } from "express";
import User from "../models/user";

class UserController {
  /**
   * @description: Get all users
   * @returns { Response<User> }
   */

  async getUsers(
    req: Request,
    res: Response
  ): Promise<Response<Record<string, any>>> {
    try {
      const user = await User.find();
      return res.json(user);
    } catch (error) {
      return res
        .status(404)
        .send({ error: "There was an error finding users" });
    }
  }

  /**
   * @description : Get one user
   * @returns { Response<User> }
   */

  async getUser(
    req: Request,
    res: Response
  ): Promise<Response<Record<string, any>>> {
    try {
      const user = await User.findById(req.params.id);
      return res.json(user);
    } catch (error) {
      return res.status(404).send({ error: "User not found" });
    }
  }

  /**
   * @description : Update user
   * @param {first_name} req first_name - String
   * @param {last_name} req last_name - String
   * @param {date_of_birth} req date_of_birth - Date (MONTH-DAY-YEAR)
   * @returns { Response<User> }
   */
  async updateUser(
    req: Request,
    res: Response
  ): Promise<Response<Record<string, any>>> {
    try {
      const updateUser = await User.findByIdAndUpdate(req.params.id, req.body);
      await updateUser.save();
      return res.json({ status: "User updated" });
    } catch (error) {
      return res
        .status(404)
        .send({ error: "There was an error updating that user" });
    }
  }

  /**
   * @description : Delete user
   * @returns { Response<User> }
   */
  async deleteUser(req: any, res: any): Promise<Response<Record<string, any>>> {
    try {
      await User.findByIdAndDelete(req.params.id);
      return res.json({ status: "User deleted successfully" });
    } catch (error) {
      return res.status(404).send({ error: "User not found" });
    }
  }

  /**
   * @description : Create user
   * @param {first_name} req first_name - String
   * @param {last_name} req last_name - String
   * @param {date_of_birth} req date_of_birth - Date
   * @returns { Response<string> }
   */
  async createUser(
    req: Request,
    res: Response
  ): Promise<Response<string, Record<string, any>>> {
    try {
      const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        date_of_birth: new Date(req.body.date_of_birth),
      });
      await newUser.save();
      return res.json({ message: "User saved successfully" });
    } catch (error) {
      return res.status(404).send({ error: "Cannot create user" });
    }
  }
}

export default new UserController();
