// src/server.ts

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { graphqlUploadExpress } from 'graphql-upload';
import schema from './schema';

const app = express();

const server = new ApolloServer({
  schema,
});

app.use(graphqlUploadExpress()); // Enable file uploads
server.applyMiddleware({ app });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
