import { UpdateService } from './../../../service/UpdateService';
import { FindByIdService } from '@modules/User/service/FindByIdService';
import { CreateService } from '@modules/User/service/CreateService';
import { container } from 'tsyringe';
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "@modules/User/infra/typeorm/schemas/User";
import { UserCreate } from '@modules/User/infra/http/inputs/UserInputs';


@Resolver(User)
export class UserResolver {

    @Query(() => User)
    async findByIdUser(
        @Arg("id",() => String) id:string
    ) {
        const findByIdService = container.resolve(FindByIdService)
        const user = await findByIdService.execute({
            id
        })
        return user
    }

    @Mutation(() => User)
    async createUser(
        @Arg("user", () => UserCreate) {name,email}: UserCreate
    ) {
        const createService = container.resolve(CreateService)
        const user = await createService.execute({
            name,
            email
        })
        return user
    }

    @Mutation(() => User)
    async updateUser(
        @Arg("user", () => UserCreate) {name,email}: UserCreate,
        @Arg("id",() => String) id:string
    ) {
        const updateService = container.resolve(UpdateService)
        
        const user = await updateService.execute({
            id,
            name,
            email
        })

        return user
    }
}