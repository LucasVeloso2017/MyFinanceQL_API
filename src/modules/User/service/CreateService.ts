import 'reflect-metadata'
import { User } from '@modules/User/infra/typeorm/schemas/User';
import AppError from '@shared/errors/appError';
import { inject, injectable } from "tsyringe";
import { IUserRepository } from '@modules/User/repository/IUserRepository';

interface IRequest{
    name:string
    email:string
}

@injectable()
export class CreateService{
    constructor(
        @inject("UserRepository")
        private repository:IUserRepository,
    ){}
    public async execute({name,email}:IRequest):Promise<User>{
        const userExist = await this.repository.findByEmail(email)

        if(userExist){
            throw new AppError("This user already exists")
        }

        const user = this.repository.create({
            name,email
        })

        return user
    }
}