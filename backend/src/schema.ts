import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type File {
    id: ID!
    path: String!
    filename: String!
    mimetype: String!
  }

  type Query {
    hello: String
    files: [File]
  }

  type Mutation {
    uploadFile(file: Upload!): File!
  }
`;
