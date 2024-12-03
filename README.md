# Javascript developer test


## Intro

Command-line interface in Node.js. 
This program has to filter a list of elements containing a pattern.

### Availables commands :

### Filter (--filter=)
- In the following file `data.js`, there are `Countries` containing `Peoples` containing `Animals`.
- Only animals containing `ry` are displayed. The order should be kept intact.
- Empty array after filtering are NOT returned.

Sample of running the command, and its output:

```shell script
$ node app.js --filter=ry
[
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
```

### Count (--count)

Print the counts of People and Animals by counting the number of children and appending it in the name, eg. `Satanwi [2]`.

Sample of running the command, and its output:

```shell script
node app.js --count
[ { name: 'Dillauti [5]',
    people:
     [ { name: 'Winifred Graham [6]',
         animals:
          [ { name: 'Anoa' },
            { name: 'Duck' },
            { name: 'Narwhal' },
            { name: 'Badger' },
            { name: 'Cobra' },
            { name: 'Crow' } ] },
       { name: 'Blanche Viciani [8]',
         animals:
          [ { name: 'Barbet' },
            { name: 'Rhea' },
            { name: 'Snakes' },
            { name: 'Antelope' },
            { name: 'Echidna' },
            { name: 'Crow' },
            { name: 'Guinea Fowl' },
            { name: 'Deer Mouse' } ] },
      ...
...
]
```
### Help (--help)
Display help section of CLI
This section contains documentation of CLI


## Getting started

### Installation of all dependencies

```bash
npm install 
```

### Run CLI

### By node.js cmd

```bash
node src/app.js --yourCmd
```
### By npm
/!\ Warning add "--" beforce your cmd to pass arguments 

```bash
npm start -- --yourCmd
```

## Unit test

To run unit test, use this command : 

```bash
npm run test
```

## Contribute to the projet

To contribute to this projet, please read its guidelines and rules set in [CONTTIBUTING.md](./CONTRIBUTING.md)