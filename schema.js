export const typeDefs = `#graphql
    type Cars {
        id: ID!
        make: String!
        model: String!
        tires: ID
    }  
    type Tires {
        id: ID!
        condition: [String!]!
    }

    type Query {
        cars: [Cars]
        tires: [Tires]
    }
`;