const fizzbuzz = require('./fizzbuzz');

test('returns 1 for the number 1', () => {
    expect(fizzbuzz(1)).toEqual(1);
});