import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type File {
    id: ID!
    path: String!
    filename: String!
    mimetype: String!
  }

  type Highlight {
    id: ID!
    fileId: ID!
    text: String!
    // Add more fields as per your requirements
  }

  type Query {
    getFiles: [File]
    getHighlights(fileId: ID!): [Highlight]
  }

  type Mutation {
    uploadFile(file: Upload!): File!
    addHighlight(fileId: ID!, text: String!): Highlight!
  }
`;
