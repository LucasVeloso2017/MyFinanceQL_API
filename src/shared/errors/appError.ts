import { ApolloError } from "apollo-server";

export default class AppError extends ApolloError {

  constructor(message: string) {
    super(message)
    Object.defineProperty(this, 'name', { value: 'Errors' });
  }
}