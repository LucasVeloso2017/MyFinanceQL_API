import 'reflect-metadata'
import { User } from '@modules/User/infra/typeorm/schemas/User';
import AppError from '@shared/errors/appError';
import { inject, injectable } from "tsyringe";
import { IUserRepository } from '@modules/User/repository/IUserRepository';

interface IRequest{
    id:string
}

@injectable()
export class FindByIdService{
    constructor(
        @inject("UserRepository")
        private repository:IUserRepository,
    ){}
    public async execute({id}:IRequest):Promise<User>{
        const userExist = await this.repository.findById(id)

        if(!userExist){
            throw new AppError("This user not exists")
        }
        return userExist
    }
}