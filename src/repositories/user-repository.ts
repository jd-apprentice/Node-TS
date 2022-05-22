import { IUser } from "models/interfaces/types";
import User from "../models/user";

class UserRepository {
  async findAll() {
    return await User.find();
  }

  async findById(id: string) {
    return await User.findById(id);
  }

  async create(user: IUser) {
    return await User.create(user);
  }

  async update(id: string, user: IUser) {
    return await User.findOneAndUpdate({ _id: id }, user, { new: true });
  }

  async delete(id: string) {
    return await User.deleteOne({ _id: id });
  }
}

export default new UserRepository();
