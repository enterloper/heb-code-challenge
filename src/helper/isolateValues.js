const dummyData = require('../../public/items.json');
/**
 * Returns objects from an array of objects 
 * that meet the criteria based on parameters.
 *
 * @param {array} items The array of items that contain the population of objects.
 * @param {string} value The value to compare against other objects.
 * @param {boolean} top The direction which the values will be picked from, defaults to true.
 * @return {array} array of objects that meet the search criteria 
 */

 const isolateValues = (items = [], value = '', top = true) => {
    console.log()
    if (!items.length || Object.keys(items[0]).indexOf(value) === -1) return [];
    const output = [];
    items.forEach(item => {
        console.log(item);
    })
 };

 console.log(isolateValues(dummyData, 'rating'))
//  export default isolateValues;