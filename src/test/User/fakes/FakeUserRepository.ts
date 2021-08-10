import { IUserRepository } from '../../../modules/User/repository/IUserRepository';
import { UserCreate } from '../../../modules/User/infra/http/inputs/UserInputs';
import { User } from '../../../modules/User/infra/typeorm/schemas/User';
import { v4 } from 'uuid';

export class FakeUserRepository implements IUserRepository{
    
    private users:User[] = []

    public async create({name,email}:UserCreate):Promise<User>{
        const user = new User()

        Object.assign(user,{
            id:v4(),
            name,
            email
        })

        this.users.push(user)

        return user;
    }

    public async save(data:User):Promise<User>{
        const user = this.users.findIndex(e => e.id === data.id)
        this.users[user] = data
        return data;
    }

    public async findById(id:string):Promise<User | undefined>{
        return this.users.find(e => e.id === id)
    }

    public async findByEmail(email:string):Promise<User | undefined>{
        return this.users.find(e => e.email === email)
    }
}
