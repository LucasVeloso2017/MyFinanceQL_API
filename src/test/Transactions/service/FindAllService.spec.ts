import { Transaction } from './../../../modules/Transactions/infra/typeorm/schemas/Transaction';
import { FindAllService } from './../../../modules/Transactions/service/FindAllService';
import { FakeTransactionRepository } from '../fakes/FakeTransactionRepository';


describe("Find All Transaction",()=>{

    it("should be able to list all transactions",async ()=>{
        const fakeTransactionRepository = new FakeTransactionRepository()
        const findAllService = new FindAllService(fakeTransactionRepository)

        const all = await findAllService.execute()

        const  verify = Array.isArray(all) ? all : undefined

        expect(all).toBe(verify)
    })
    
})