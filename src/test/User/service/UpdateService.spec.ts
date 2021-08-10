import { FakeUserRepository } from '../fakes/FakeUserRepository';
import { CreateService } from '../../../modules/User/service/CreateService';
import { UpdateService } from '../../../modules/User/service/UpdateService';
import AppError from '@shared/errors/appError';

describe("Update User",()=>{

    it("should be able to update a user",async ()=>{
        const fakeUserRepository = new FakeUserRepository()
        const createService = new CreateService(fakeUserRepository)
        const updateService = new UpdateService(fakeUserRepository)

        const user = await createService.execute({
            name:"Lucas",
            email:"lucas@email.com"
        })

        const updateUser = await updateService.execute({
            id:user.id,
            name:"Lucas Alterado",
            email:user.email
        })

        expect(updateUser.id).toBe(user.id)
    })
    
    it("should not be able to update an user using inexisting id",async ()=>{
        const fakeUserRepository = new FakeUserRepository()
        const updateService = new UpdateService(fakeUserRepository)

        expect(
            updateService.execute({
                id:"12312313132123",
                name:"Lucas Alterado",
                email:"123123123@email.com"
            })
        ).rejects.toBeInstanceOf(AppError)
    })
})