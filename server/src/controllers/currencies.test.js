import { getCurrencyById } from './currencies';
import { Currencies } from '../models';

jest.mock('../models', () => ({ Currencies: () => {} }));
const mockCurrencies = {
  id: 1,
  code: 'EUR',
  name: 'euro',
  availableToRebalance: true,
};

describe('Get currency by id', () => {
  const input = 1;

  Currencies.findOne = jest.fn();
  Currencies.findOne.mockResolvedValue(mockCurrencies);

  test('Currencies.findOne should have been called once', async () => {
    await getCurrencyById(input);
    expect(Currencies.findOne).toHaveBeenCalled();
  });

  test('Currencies.findOne should have been called with currencyId', async () => {
    await getCurrencyById(input);
    expect(Currencies.findOne).toHaveBeenCalledWith({
      where: {
        id: input,
      },
    });
  });

  test('getCurrencyById should return a currency row', async () => {
    expect(getCurrencyById(input)).resolves.toBe(mockCurrencies);
  });

  test('getCurrencyById should throw an error if query to database fails', async () => {
    Currencies.findOne.mockRejectedValue(new Error('500'));
    expect(() => getCurrencyById(input)).rejects.toThrow('500');
  });
});

// Copy paste for getCurrencyByCode and getCurrencies?
