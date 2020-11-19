import buildPrice from './buildPrice';

describe('buildPrice', () => {
  it('should return a string', () => {
    const output = buildPrice(9.99);
    expect(typeof output).toBe('string');
  });
  
  it('should correctly set the cents', () => {
    const tests = [
      {
        input: 9,
        output: '$9.00'
      },
      {
        input: 9.99,
        output: '$9.99'
      },
      {
        input: 900.,
        output: '$900.00'
      },
      {
        input: 9.9,
        output: '$9.90'
      },
      {
        input: 1.54,
        output: '$1.54'
      },
      {
        input: 1234.91,
        output: '$1234.91'
      },
      {
        input: 1234.5,
        output: '$1234.50'
      }
    ];

    tests.forEach(({ input, output }) => {
      expect(buildPrice(input)).toBe(output);
    });
  });
});
