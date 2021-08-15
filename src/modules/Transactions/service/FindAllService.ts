import 'reflect-metadata'
import { Transaction } from './../infra/typeorm/schemas/Transaction';
import { ITransactionRepository } from './../repository/ITransactionRepository';
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllService{
    constructor(
        @inject("TransactionRepository")
        private repository:ITransactionRepository,
    ){}
    public async execute():Promise<Transaction[]>{
        return this.repository.findAll()
    }
}