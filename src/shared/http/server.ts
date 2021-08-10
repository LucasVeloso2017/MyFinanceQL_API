import 'reflect-metadata'
import '../typeorm/index'
import '../container'
import 'dotenv/config'


import { resolvers } from './resolvers/index';
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'


const bootstrap = async ()=>{
    const schema = await buildSchema({
        resolvers
    })
    const server = new ApolloServer({
        schema,
        debug:false,
        cors:{
            origin:'*'
        },      
        formatError:(err) => ({ message: err.message,error:err.extensions }) 
    })
    server.listen({port:4100 },()=>{
        console.log('run on 4100')
    })
}
bootstrap()
