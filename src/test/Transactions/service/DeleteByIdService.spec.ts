import { Transaction } from './../../../modules/Transactions/infra/typeorm/schemas/Transaction';
import { FakeTransactionRepository } from './../fakes/FakeTransactionRepository';

import AppError from '@shared/errors/appError';
import { FindByIdService } from '@modules/Transactions/service/FindByIdService';
import { CreateService } from '@modules/Transactions/service/CreateService';
import { DeleteByIdService } from '@modules/Transactions/service/DeleteByIdService';

describe("Delete Transaction",()=>{

    it("should be able to delete a transaction using ID",async ()=>{
        const fakeTransactionRepository = new FakeTransactionRepository()
        const deleteByIdService = new DeleteByIdService(fakeTransactionRepository)
        const createService = new CreateService(fakeTransactionRepository)

        const transaction = await createService.execute({
            title: "School",
            type: "income",
            value: 2000
        })

        const deleted = await deleteByIdService.execute({id:transaction.id})

        

        //expect(findTransaction.id).toBe(transaction.id)
    })

    it("should not be able to find a transaction using ID",async ()=>{
        const fakeTransactionRepository = new FakeTransactionRepository()
        const findByIdService = new FindByIdService(fakeTransactionRepository)

        expect(
            findByIdService.execute({
                id:"12312313123123123123"
            })
        ).rejects.toBeInstanceOf(AppError)
    })
    
})