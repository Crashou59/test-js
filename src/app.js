const { count } = require("./cmd/count")
const { data } = require("./data")
const { filter } = require("./cmd/filter")

const HELP_MSG = `
    You need to use one argument : 

        --filter=AnimalName 

           Exemple : --filter=ry Only animals containing 'ry' are displayed
         
        --count
         
           Print the counts of People and Animals by counting the number of children and appending it in the name

        --help

          Display help message
        `


const cmd = {
    '--help': () => console.log(HELP_MSG),
    '--count': () => console.log(JSON.stringify(count(data), null, 2)),
    '--filter': (value) => {
        if (!value) {
            console.log("Error: Filter value cannot be empty.")
            return
        }
        console.log(JSON.stringify(filter(data, value), null, 2))
    },
}

const args = process.argv.slice(2)

if (args.length > 0) {
    args.forEach(arg => {
        const [key, value] = arg.includes('=') ? arg.split('=') : [arg, null]
        if (cmd[key]) {
            cmd[key](value)
        } else {
            console.log(`Error: Invalid argument: ${arg}`)
        }
        process.exit()
    })
} else {
    console.log(HELP_MSG)
    process.exit()
}
