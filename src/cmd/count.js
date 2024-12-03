const count = (data) => {
    if (!data) return []

    return data.map(country =>
    ({
        ...country,
        people: country.people.map(people => (
            { ...people, name: `${people.name} [${people.animals.length}]` }
        ))
        , name: `${country.name} [${country.people.length}]`
    }))
}


module.exports = {
    count
}