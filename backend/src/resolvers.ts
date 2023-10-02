// @ts-ignore
import { FileUpload } from 'graphql-upload';
import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream';
import util from 'util';

export const resolvers = {
  Query: {
    hello: () => "Hello, World!",
    files: () => { /* TODO: Retrieve from database */ }
  },
  Mutation: {
    uploadFile: async (_: any, { file }: { file: FileUpload }) => {
      const { createReadStream, filename, mimetype } = await file;
      const filePath = path.join(__dirname, `../../uploads/${filename}`);
      const stream = createReadStream();
      const pipe = util.promisify(stream.pipe.bind(stream));
      await pipe(fs.createWriteStream(filePath));
      // TODO: Save file metadata to database
      return { id: "1", path: filePath, filename, mimetype };
    },
  },
};
