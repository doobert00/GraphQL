import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema.js';
import db from './db.js'

const PORT = 5000;

const resolvers = {
    Query: {
        cars() {
            return db.cars;
        },
        car(_, args) {
            return db.cars.find((car) => car.id === args.id)
        },
        tires() {
           return db.tires;
        },
        carTires(_, args) {
            return db.tires.find((tires) => tires.id === args.id)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: PORT }
});

console.log(`Listening on port: ${PORT}`);

