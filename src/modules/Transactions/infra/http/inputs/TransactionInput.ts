import { Field, InputType, } from "type-graphql";

@InputType()
class TransactionCreate {
    @Field(()=>String)
    title: string;

    @Field(()=>String)
    type:string;

    @Field(()=>Number)
    value:number;
}


export {TransactionCreate}