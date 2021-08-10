import { FakeUserRepository } from '../fakes/FakeUserRepository';
import { FindByIdService } from '../../../modules/User/service/FindByIdService';
import { CreateService } from '../../../modules/User/service/CreateService';
import AppError from '@shared/errors/appError';

describe("Find By ID User",()=>{

    it("should be able to find a user using ID",async ()=>{
        const fakeUserRepository = new FakeUserRepository()
        const findByIdService = new FindByIdService(fakeUserRepository)
        const createService = new CreateService(fakeUserRepository)

        const user = await createService.execute({
            name:"Lucas",
            email:"lucas@email.com"
        })

        const findUser = await  findByIdService.execute({
            id:user.id
        })

        expect(findUser.id).toBe(user.id)
    })

    it("should be able to find a user using ID",async ()=>{
        const fakeUserRepository = new FakeUserRepository()
        const findByIdService = new FindByIdService(fakeUserRepository)

        expect(
            findByIdService.execute({
                id:"12312313123123123123"
            })
        ).rejects.toBeInstanceOf(AppError)
    })
    
})