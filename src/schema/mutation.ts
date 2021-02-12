import { GraphQLObjectType } from 'graphql';
import createAuthor from './mutations/createAuthor';
import createQuote from './mutations/createQuote';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: (): any => ({
    createAuthor,
    createQuote,
  }),
});

export default mutation;
