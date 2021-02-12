import DataLoader from 'dataloader';
import QuoteRepository from '../repositories/QuoteKnexRepository';
import { Quote } from '../types';

async function getQuotesById(ids: number[]): Promise<Quote[]> {
  const quoteRepository = new QuoteRepository();
  const quotes = await quoteRepository.getMany(ids);
  return ids.map((id) => {
    return quotes.find((quote) => quote.id === id);
  });
}

export default new DataLoader(getQuotesById);
