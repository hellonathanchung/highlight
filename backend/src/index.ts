import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();  // Note this line

  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`🚀 Server is ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startApolloServer();
