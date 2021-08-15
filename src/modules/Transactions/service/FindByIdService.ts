import 'reflect-metadata'
import { Transaction } from './../infra/typeorm/schemas/Transaction';
import { ITransactionRepository } from './../repository/ITransactionRepository';
import AppError from '@shared/errors/appError';
import { inject, injectable } from "tsyringe";

interface IRequest{
    id:string
}

@injectable()
export class FindByIdService{
    constructor(
        @inject("TransactionRepository")
        private repository:ITransactionRepository,
    ){}
    public async execute({id}:IRequest):Promise<Transaction>{
        const trxExists = await this.repository.findById(id)

        if(!trxExists){
            throw new AppError("This transaction not exists")
        }
        return trxExists
    }
}