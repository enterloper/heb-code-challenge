const { sortByPriceLowToHigh, sortByPriceHighToLow } = require("./transformData");

const priceTests = {
    cases: [
        [{ amzn_price: 1}, { amzn_price: 0 }, 1],
        [{ amzn_price: 0 }, { amzn_price: 1 }, -1],
        [{ amzn_price: 1000 }, { amzn_price: 999 }, 1],
        [{ amzn_price: 9999 }, { amzn_price: 10000 }, -1],
    ],
    testPhrases: [
        {
            output: -1, words: 'less than'
        },
        {
            output: 1, words: 'more than'
        }
    ]
};

describe('sortByPriceLowToHigh', () => {
    const {cases, testPhrases} = priceTests;

    testPhrases.forEach(phrase => {
        let {output, words} = phrase;
        it(`returns ${output} if property amzn_price on parameter a is ${words} that of b`, () => {
            cases.forEach(test => {
                expect(sortByPriceLowToHigh(test[0], test[1])).toBe(test[2]);
            });
        });
    });

    it('returns 0 if property amzn_price on parameter a is equal to that of b', () => {
        expect(sortByPriceLowToHigh(1000, 1000)).toBe(0);
    });
});

describe('sortByPriceHighToLow', () => {
    const {cases, testPhrases} = priceTests;

    testPhrases.forEach(phrase => {
        let {output, words} = phrase;
        it(`returns ${output} if property amzn_price on parameter a is ${words} that of b`, () => {
            cases.forEach(test => {
                expect(sortByPriceHighToLow(test[0], test[1])).toBe(-1 * test[2]);
            });
        });
    });

    it('returns 0 if property amzn_price on parameter a is equal to that of b', () => {
        expect(sortByPriceHighToLow(1000, 1000)).toBe(0);
    });
});
