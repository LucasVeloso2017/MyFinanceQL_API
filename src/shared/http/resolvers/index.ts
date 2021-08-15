import { TransactionResolver } from './../../../modules/Transactions/infra/http/resolvers/TransactionResolver';
import { NonEmptyArray } from 'type-graphql';
import { UserResolver } from './../../../modules/User/infra/http/resolvers/UserResolver';

export const resolvers:NonEmptyArray<Function> | NonEmptyArray<string> = [
    UserResolver,TransactionResolver
]