import { TransactionRepository } from './../../../modules/Transactions/infra/typeorm/repository/TransactionRepository';
import { ITransactionRepository } from './../../../modules/Transactions/repository/ITransactionRepository';
import { UserRepository } from './../../../modules/User/infra/typeorm/repository/UserRepository';
import { IUserRepository } from './../../../modules/User/repository/IUserRepository';
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>(
    'UserRepository',UserRepository
)
container.registerSingleton<ITransactionRepository>(
    'TransactionRepository',TransactionRepository
)
