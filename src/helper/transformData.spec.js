import transformData, {
    sortByPriceLowToHigh, 
    sortByPriceHighToLow,
    sortByRatingLowToHigh, 
    sortByRatingHighToLow
} from './transformData';
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
    const testLowHighSorting = [
        {
            arguments: [2, 5, 'priceLowHigh', 100],
            output: [
                {
                    rating: 4.6,
                    price: 2.99,
                    title: "Math War Addition & Subtraction Game Cards"
                },
                {
                    rating: 4.8,
                    price: 3.99,
                    title: 'The Learning Line: Telling Time'
                }
            ],
            expectedLength: 2
        },
        {
            arguments: [12, 50, 'priceLowHigh', 100],
            output: [
                {
                    rating: 4.6,
                    price: 12.95,
                    title: "Channie's Easy Peasy Cursive Workbook Pad"
                  },
                  {
                    rating: 5,
                    price: 29.7,
                    title: '2021 She Holds on to Hope For He is Forever Faithful 18-Month Planner'
                  }
            ],
            expectedLength: 5
        },
        {
            arguments: [12, 50, 'priceLowHigh', 3],
            output: [
                {
                    rating: 4.6,
                    price: 12.95,
                    title: "Channie's Easy Peasy Cursive Workbook Pad"
                  },
                  {
                    rating: 5,
                    price: 17.99,
                    title: '2021 The Lord Is My Shepherd Wall Calendar'
                  }
            ],
            expectedLength: 3
        }
    ]
    it('correctly filters, sorts, and slices the data based on passed parameters', () => {
        testLowHighSorting.forEach(test => {
            let result = transformData(dummyData, ...test.arguments);
            // check output matches expected length
            expect(result).toHaveLength(test.expectedLength);
            // check ratings of first and last values
            expect(result[0].rating).toBe(test.output[0].rating);
            expect(result[result.length - 1].rating).toBe(test.output[1].rating);
            // check prices of first and last values
            expect(result[0].amzn_price).toBe(test.output[0].price);
            expect(result[result.length - 1].amzn_price).toBe(test.output[1].price);
            // check prices of first and last titles
            expect(result[0].title).toBe(test.output[0].title);
            expect(result[result.length - 1].title).toBe(test.output[1].title);
        });
    });

    it('limits the items based on passed max price parameters', () => {
        const result = transformData(dummyData, 1, 3, 'priceLowHigh', 100)
        expect(result).toHaveLength(1);
        expect(result[0].amzn_price).toEqual(2.99);
    });

    it('limits the items based on passed min price parameters', () => {
        const result = transformData(dummyData, 30, 1000, 'priceLowHigh', 100)
        expect(result).toHaveLength(1);
        expect(result[0].amzn_price).toEqual(50.63);
    });
});