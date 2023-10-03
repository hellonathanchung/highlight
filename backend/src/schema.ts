// src/graphql/schema.ts

import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs as mainTypeDefs, resolvers as mainResolvers } from './mainSchema';
import { typeDefs as mutationsTypeDefs } from './mutations'; // Import the mutations

const typeDefs = [mainTypeDefs, mutationsTypeDefs]; // Combine the main schema and mutations
const resolvers = mainResolvers; // You can extend the resolvers here if needed

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
