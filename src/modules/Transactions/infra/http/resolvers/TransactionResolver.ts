import { container } from 'tsyringe';
import { Mutation } from 'type-graphql';
import { Arg } from 'type-graphql';
import { Resolver } from 'type-graphql';
import { Query } from 'type-graphql';


import { Transaction } from './../../typeorm/schemas/Transaction';
import { TransactionCreate } from '../inputs/TransactionInput';

import { FindByIdService } from '@modules/Transactions/service/FindByIdService';
import { CreateService } from './../../../service/CreateService';
import { DeleteByIdService } from './../../../service/DeleteByIdService';
import { FindAllService } from './../../../service/FindAllService';

@Resolver(Transaction)
export class TransactionResolver {

    @Query(() => [Transaction])
    async findAllTransactions() {
        const all = container.resolve(FindAllService)

        const trxs = await all.execute();

        return trxs
    }

    @Query(() => Transaction)
    async findByIdTransactions(
        @Arg("id",() => String) id:string
    ) {
        const findById = container.resolve(FindByIdService)
        const trx = await findById.execute({
            id
        })
        return trx
    }

    @Mutation(() => Boolean)
    async deleteTransaction(
        @Arg("id",() => String) id:string
    ) {
        const deleteById = container.resolve(DeleteByIdService)

        await deleteById.execute({
            id
        })

        return true
    }

    @Mutation(() => Transaction)
    async createTransaction(
        @Arg("transaction", () => TransactionCreate) {title,type,value}: TransactionCreate
    ) {
        const create = container.resolve(CreateService)
        const trx = await create.execute({
            title,
            type,
            value
        })
        return trx
    }
}