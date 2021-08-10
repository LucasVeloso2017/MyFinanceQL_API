import { Field, ID, ObjectType } from 'type-graphql';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User{

    @Field(()=> ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(()=>String)
    @Column()
    name: string;

    @Field(()=>String)
    @Column()
    email:string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}