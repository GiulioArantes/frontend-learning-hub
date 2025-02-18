jest.mock('../src/concepts/api-integration/promises/script.js', () => ({
  buscarDados: jest.fn(() => Promise.resolve({ id: 1, name: 'João' })),
}));

const {
  buscarDados,
} = require('../src/concepts/api-integration/promises/script.js');

describe('buscarDados()', () => {
  test('resolves with correct data', async () => {
    await expect(buscarDados()).resolves.toEqual({ id: 1, name: 'João' });
  });
});
