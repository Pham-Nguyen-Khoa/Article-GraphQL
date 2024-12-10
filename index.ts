import express, { Express } from "express";
import dotenv from "dotenv";
import * as database from "../Artical/config/database";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import {typeDefs} from "./typeDefs/index.typeDefs"

import { resolvers } from "./resolvers/index.resolver";
import { requireAuth } from "./middleware/authen.middleware";

const startServer = async () => {
  dotenv.config();

  database.connect();

  const app: Express = express();
  const port: number | string = process.env.PORT || 3000;

  // Add JSON middleware
  app.use(express.json());

  // GraphQL

  app.use('/graphql',requireAuth)

  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers,
    introspection: true
    // context: ({req}) => {
    //   return {
    //     ...req
    //   } 
    // }
  });

  await apolloServer.start();

  app.use('/graphql', expressMiddleware(apolloServer,{
    context: async ({ req }) => {
      return {
        ...req
      };
    },
  }));

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
};

startServer();