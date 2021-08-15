import { FakeTransactionRepository } from './../fakes/FakeTransactionRepository';
import AppError from '@shared/errors/appError';
import { CreateService } from '@modules/Transactions/service/CreateService';

describe("Create Transaction", () => {

    it("should be able to create a new transaction", async () => {
        const fakeTransactionRepository = new FakeTransactionRepository()
        const createService = new CreateService(fakeTransactionRepository)

        const trx = await createService.execute({
            title: "School",
            type: "income",
            value: 2000
        })

        expect(trx.title).toBe("School")
    })

})