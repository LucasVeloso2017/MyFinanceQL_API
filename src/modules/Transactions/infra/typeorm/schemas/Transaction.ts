import { Field, ID, ObjectType } from 'type-graphql';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import ColumnNumericTransformer from '../../../../utils/ColumnNumericTransformer';

@ObjectType()
@Entity()
export class Transaction {

    @Field(()=> ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => String)
    @Column()
    title: string;

    @Field(() => String)
    @Column()
    type: string;

    @Field(() => Number)
    @Column('numeric', {
        precision: 10,
        scale: 2,
        transformer: new ColumnNumericTransformer(),
    })
    value: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}