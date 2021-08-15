import { ITransactionRepository } from './../../../modules/Transactions/repository/ITransactionRepository';
import { Transaction } from './../../../modules/Transactions/infra/typeorm/schemas/Transaction';
import { v4 } from 'uuid';
import { TransactionCreate } from '@modules/Transactions/infra/http/inputs/TransactionInput';

export class FakeTransactionRepository implements ITransactionRepository{
    
    private transactions:Transaction[] = []

    
    public async create({title,type,value}:TransactionCreate):Promise<Transaction>{
        const transaction = new Transaction()

        Object.assign(transaction,{
            id:v4(),
            title,
            type,
            value
        })

        this.transactions.push(transaction)

        return transaction;
    }

    public async save(data:Transaction):Promise<Transaction>{
        const user = this.transactions.findIndex(e => e.id === data.id)
        this.transactions[user] = data
        return data;
    }

    public async findById(id:string):Promise<Transaction | undefined>{
        return this.transactions.find(e => e.id === id)
    }

    public async findAll():Promise<Transaction[]>{
        return this.transactions
    }

    public async delete(id:string):Promise<void>{
        const trx = this.transactions.findIndex(e => e.id === id)
        this.transactions.splice(trx,1)
    }
}
