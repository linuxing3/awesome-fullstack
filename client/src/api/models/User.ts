import BaseModel from "./BaseModel";

export interface IUser {
  id: string;
  name: string;
  age: string;
  gender: string;
  position: string;
}

export default class User extends BaseModel {
  static entity = "user";

  static primaryKey = "id";

  static fields() {
    return {
      id: this.increment(),
      username: this.string("xingwenju"),
      email: this.string("xingwenju@gmail.com"),
      password: this.string("20090909")
    };
  }
}
