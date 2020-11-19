const { sortByPriceLowToHigh, sortByPriceHighToLow, sortByRatingLowToHigh, sortByRatingHighToLow } = require("./transformData");
import dummyData from '../../public/items.json';

const simpleTests = {
    cases: [
        [{ amzn_price: 1, rating: 4 }, { amzn_price: 0, rating: 1 }, 1],
        [{ amzn_price: 0, rating: 1 }, { amzn_price: 1, rating: 4 }, -1],
        [{ amzn_price: 1000, rating: 5 }, { amzn_price: 999, rating: 4.9 }, 1],
        [{ amzn_price: 9999, rating: 3 }, { amzn_price: 10000, rating: 3.1 }, -1],
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
    const {cases, testPhrases} = simpleTests;

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
    const {cases, testPhrases} = simpleTests;

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

describe('sortByRatingHighToLow', () => {
    const {cases, testPhrases} = simpleTests;

    testPhrases.forEach(phrase => {
        let {output, words} = phrase;
        it(`returns ${output} if property rating on parameter a is ${words} that of b`, () => {
            cases.forEach(test => {
                expect(sortByRatingHighToLow(test[0], test[1])).toBe(-1 * test[2]);
            });
        });
    });

    it('returns 0 if property rating on parameter a is equal to that of b', () => {
        expect(sortByRatingHighToLow(1000, 1000)).toBe(0);
    });
});

describe('sortByRatingLowToHigh', () => {
    const {cases, testPhrases} = simpleTests;

    testPhrases.forEach(phrase => {
        let {output, words} = phrase;
        it(`returns ${output} if property rating on parameter a is ${words} that of b`, () => {
            cases.forEach(test => {
                expect(sortByRatingLowToHigh(test[0], test[1])).toBe(test[2]);
            });
        });
    });

    it('returns 0 if property rating on parameter a is equal to that of b', () => {
        expect(sortByRatingLowToHigh(1000, 1000)).toBe(0);
    });
});

describe('transformData', () => {
    it('correctly filters, sorts, and slices the data based on passed parameters', () => {
        console.log({dummyData});
    });
});