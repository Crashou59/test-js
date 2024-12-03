const { fullData } = require("./__mocks__/mock-data")
const { filter } = require("./filter")


test('filter data by "ry"', () => {
    const expectData = [
        {
            name: 'Uzuzozne',
            people: [
                {
                    name: 'Lillie Abbott',
                    animals: [
                        {
                            name: 'John Dory'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Satanwi',
            people: [
                {
                    name: 'Anthony Bruno',
                    animals: [
                        {
                            name: 'Oryx'
                        }
                    ]
                }
            ]
        }
    ]

    expect(filter(fullData, 'ry')).toStrictEqual(expectData)
})

test('filter "ry" without data', () => {
    expect(filter(null, 'ry')).toStrictEqual([])
})


test('filter without filter value', () => {
    expect(filter(fullData, '')).toStrictEqual(fullData)
})