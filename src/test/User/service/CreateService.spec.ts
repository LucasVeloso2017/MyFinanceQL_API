import { FakeUserRepository } from '../fakes/FakeUserRepository';
import { CreateService } from '../../../modules/User/service/CreateService';
import AppError from '@shared/errors/appError';

describe("Create User",()=>{

    it("should be able to create a new user",async ()=>{
        const fakeUserRepository = new FakeUserRepository()
        const createService = new CreateService(fakeUserRepository)

        const user = await createService.execute({
            name:"Lucas",
            email:"lucas@email.com"
        })

        expect(user.email).toBe("lucas@email.com")
    })
    
    it("should not be able to create a new user using existing email",async ()=>{
        const fakeUserRepository = new FakeUserRepository()
        const createService = new CreateService(fakeUserRepository)

       await createService.execute({
            name:"Lucas",
            email:"lucas@email.com"
        })

        expect(
            createService.execute({
                name:"Lucas",
                email:"lucas@email.com"
            })
        ).rejects.toBeInstanceOf(AppError)
    })
})