export const typeDefs = `#graphql
    type Car {
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
        cars: [Car]
        car(id: ID!): Car
        tires: [Tires]
        carTires(id: ID!): Tires
    }
`;