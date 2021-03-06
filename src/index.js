import {
  ApolloServer,
  gql,
} from 'apollo-server';
import HTTP from './http';

const typeDefs = gql`
  type Cep {
    cep: String
    logradouro: String,
    localidade: String,
    uf: String
  }

  type Query {
    cep(cep: String): Cep
  }
`;
const cepResponse = async (cep) => {
  const {
    cep: cepValue,
  } = cep;
  const {
    data = {},
  } = await HTTP.get(`${cepValue}/json`);

  return data;
};

const resolvers = {
  Query: {
    cep(obj, args, context, info) { //eslint-disable-line
      return cepResponse(args);
    },
  },
};

const server = new ApolloServer(
  {
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const {
        headers: {
          authorization,
        },
      } = req;

      return authorization;
    },
  },
);

server.listen().then(({ url }) => {
  console.warn(`🚀  Server ready at ${url}`); // eslint-disable-line
});
