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
        tires() {
           return db.tires;
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

