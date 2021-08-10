import 'reflect-metadata'
import { User } from '@modules/User/infra/typeorm/schemas/User';
import AppError from '@shared/errors/appError';
import { inject, injectable } from "tsyringe";
import { IUserRepository } from '@modules/User/repository/IUserRepository';

interface IRequest{
    id:string
    name:string
    email:string
}

@injectable()
export class UpdateService{
    constructor(
        @inject("UserRepository")
        private repository:IUserRepository,
    ){}
    public async execute({id,name,email}:IRequest):Promise<User>{
        const user = await this.repository.findById(id)
        if(!user){
            throw new AppError("This user already/not exists")
        }

        user.email=email
        user.name=name

        await this.repository.save(user)

        return user
    }
}