import { IUserRepository } from '@modules/User/repository/IUserRepository';
import { Repository, getRepository } from 'typeorm';
import { UserCreate } from '@modules/User/infra/http/inputs/UserInputs';
import { User } from '@modules/User/infra/typeorm/schemas/User';

export class UserRepository implements IUserRepository{
    private repository:Repository<User>

    constructor(){ this.repository = getRepository(User) } 

    public async create({name,email}:UserCreate):Promise<User>{
        return await this.repository.save(
            this.repository.create({name,email})
        )
    }

    public async save(data:User):Promise<User>{
        return await this.repository.save(data)
    }

    public async findById(id:string):Promise<User | undefined>{
        return await this.repository.findOne(id)
    }

    public async findByEmail(email:string):Promise<User | undefined>{
        return await this.repository.findOne({where:{email}})
    }
}
