import { Transaction } from './../schemas/Transaction';
import { ITransactionRepository } from './../../../repository/ITransactionRepository';
import { Repository, getRepository } from 'typeorm';
import { TransactionCreate } from '../../http/inputs/TransactionInput';

export class TransactionRepository implements ITransactionRepository{
    private repository:Repository<Transaction>

    constructor(){ this.repository = getRepository(Transaction) } 

    public async create({title,type,value}:TransactionCreate):Promise<Transaction>{
        return await this.repository.save(
            this.repository.create({title,type,value})
        )
    }

    public async save(data:Transaction):Promise<Transaction>{
        return await this.repository.save(data)
    }

    public async findById(id:string):Promise<Transaction | undefined>{
        return await this.repository.findOne(id)
    }

    public async findAll():Promise<Transaction[]>{
        return await this.repository.find()
    }

    public async delete(id:string):Promise<void>{
        const trx = await this.findById(id)
        if(trx){
            await this.repository.delete(trx.id)
        }

    }
}
