import { FakeTransactionRepository } from './../fakes/FakeTransactionRepository';

import AppError from '@shared/errors/appError';
import { FindByIdService } from '@modules/Transactions/service/FindByIdService';
import { CreateService } from '@modules/Transactions/service/CreateService';

describe("Find By ID Transaction",()=>{

    it("should be able to find a transaction using ID",async ()=>{
        const fakeTransactionRepository = new FakeTransactionRepository()
        const findByIdService = new FindByIdService(fakeTransactionRepository)
        const createService = new CreateService(fakeTransactionRepository)

        const transaction = await createService.execute({
            title: "School",
            type: "income",
            value: 2000
        })

        const findTransaction = await  findByIdService.execute({
            id:transaction.id
        })

        expect(findTransaction.id).toBe(transaction.id)
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