const {shuffleArray} = require('./utils')
describe('shuffleArray should', () => {
    test('shuffleArray returns array', () => {
        expect.arrayContaining([
            expect.objectContaining({id:0}),
            expect.objectContaining({id:1}),
            expect.objectContaining({id:2}),
            expect.objectContaining({id:3}),
            expect.objectContaining({id:4})
        ])
    })
    test('shuffleArray should only have a length of five', () => {
        expect(shuffleArray.length).toBe(4)
    })
})
