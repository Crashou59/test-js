const { oneCountrWithOnePeopleData } = require("./__mocks__/mock-data")
const { count } = require("./count")


test('count data for one country', () => {
    const expectData = [{
        name: 'Dillauti [1]',
        people:
            [{
                name: 'Winifred Graham [6]',
                animals:
                    [{ name: 'Anoa' },
                    { name: 'Duck' },
                    { name: 'Narwhal' },
                    { name: 'Badger' },
                    { name: 'Cobra' },
                    { name: 'Crow' }]
            }]
    }]

    expect(count(oneCountrWithOnePeopleData)).toStrictEqual(expectData)
})


test('count without data', () => {
    expect(count(null)).toStrictEqual([])
})