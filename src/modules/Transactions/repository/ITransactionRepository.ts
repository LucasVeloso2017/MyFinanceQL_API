import { TransactionCreate } from '../infra/http/inputs/TransactionInput';
import { Transaction } from './../infra/typeorm/schemas/Transaction';

export interface ITransactionRepository{
    findById(id:string):Promise<Transaction | undefined>
    findAll():Promise<Transaction[]>
    create(data:TransactionCreate):Promise<Transaction>
    save(data:Transaction):Promise<Transaction>
    delete(id:string):Promise<void>
}