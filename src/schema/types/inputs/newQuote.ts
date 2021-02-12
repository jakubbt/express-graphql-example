import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const newAuthor = new GraphQLInputObjectType({
  name: 'NewQuote',
  fields: {
    quote: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export default newAuthor;
