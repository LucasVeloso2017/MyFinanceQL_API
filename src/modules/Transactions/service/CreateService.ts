import  AppError  from '@shared/errors/appError';
import { Transaction } from './../infra/typeorm/schemas/Transaction';
import 'reflect-metadata'
import { ITransactionRepository } from './../repository/ITransactionRepository';
import { inject, injectable } from "tsyringe"

interface IRequest{
    title:string
    type:string
    value:number
}

@injectable()
export class CreateService{
    constructor(
        @inject("TransactionRepository")
        private repository:ITransactionRepository,
    ){}
    public async execute({title,value,type}:IRequest):Promise<Transaction>{
        
        if(this.isEmpty(title) || this.isEmpty(value.toString())){
            throw new AppError("Error during create a transaction")
        }

        const create = this.repository.create({
            title,
            value,
            type
        })

        return create
    }


    public isEmpty(value:string):Boolean{
        return (!value || value.length === 0 );
    }
}