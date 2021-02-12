import { GraphQLNonNull } from 'graphql';
import Context from '../../context/Context';
import { default as quoteType } from '../types/quote';
import newQuote from '../types/inputs/newQuote';

const createQuote = {
  type: quoteType,
  args: {
    input: {
      type: GraphQLNonNull(newQuote),
    },
  },
  resolve: (_, { input }, context: Context): Promise<any> => {
    return context.repositories.quote.create(input)
  },
};

export default createQuote;
