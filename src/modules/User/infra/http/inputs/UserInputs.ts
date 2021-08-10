import { Field, InputType, } from "type-graphql";

@InputType()
class UserCreate {
    @Field(()=>String)
    name: string;

    @Field(()=>String)
    email:string;
}


export {UserCreate}