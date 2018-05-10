const jsConvert = require('./');

describe("Test if javascript objects are evaluated to strings", () => {
    test('Module is not undefined', () => {
        expect(jsConvert).toBeDefined();
    })
    
    test('Converts js object in string to valid js object', async () => {
        const jsString = '{ prop: "value" }';
        const jsObject = await jsConvert.convert(jsString);
        expect(jsObject).toEqual({prop: "value"});
    })
    
    test('Evaluates a function on object', async () => {
        const jsString = '{ prop: "value", func: () => [1,2,3] }';
        const jsObject = await jsConvert.convert(jsString);
        expect(jsObject.func()).toEqual([1,2,3]);
    })
})