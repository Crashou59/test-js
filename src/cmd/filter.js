const filter = (data, value) => {
    if (!data) return []

    return data.reduce((accCountry, country) => {
        const filteredPeople = country.people.reduce((accPeople, person) => {
            const filteredAnimals = person.animals.filter(animal =>
                animal.name.toLowerCase().includes(value.toLowerCase())
            )

            if (filteredAnimals.length > 0) {
                accPeople.push({ ...person, animals: filteredAnimals })
            }

            return accPeople
        }, [])

        if (filteredPeople.length > 0) {
            accCountry.push({ ...country, people: filteredPeople })
        }

        return accCountry
    }, [])
}

module.exports = {
    filter
}