import { UserRepository } from './../../../modules/User/infra/typeorm/repository/UserRepository';
import { IUserRepository } from './../../../modules/User/repository/IUserRepository';
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>(
    'UserRepository',UserRepository
)
