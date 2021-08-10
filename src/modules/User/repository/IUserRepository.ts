import { UserCreate } from "@modules/User/infra/http/inputs/UserInputs";
import { User } from "@modules/User/infra/typeorm/schemas/User";

export interface IUserRepository{
    findById(id:string):Promise<User | undefined>
    findByEmail(email:string):Promise<User | undefined>
    create(data:UserCreate):Promise<User>
    save(data:User):Promise<User>
}