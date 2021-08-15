import 'reflect-metadata'
import { ITransactionRepository } from './../repository/ITransactionRepository';
import AppError from '@shared/errors/appError';
import { inject, injectable } from "tsyringe";

interface IRequest{
    id:string
}

@injectable()
export class DeleteByIdService{
    constructor(
        @inject("TransactionRepository")
        private repository:ITransactionRepository,
    ){}
    public async execute({id}:IRequest):Promise<void>{
        const trxExists = await this.repository.findById(id)

        if(!trxExists){
            throw new AppError("This transaction not exists")
        }

        await this.repository.delete(trxExists.id)
    }
}