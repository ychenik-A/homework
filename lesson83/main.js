const i = {
    name: 'Aleksandr',
    age: 16,
    status: 'uchenik po napravleniu - web razrabotchik'
}
console.log(i)



const user = {
    i: {
        name: 'Aleksandr',
        age: 16,
        status: 'uchenik po napravleniu - web razrabotchik',
        hello(name) {
            console.log(`hello ${name}`)
        }
    }

}
user.i.hello('Aleksandr')


// =================================================================


const users = [
    {
        name: 'sanya',
        age: 21,
        isAdmin: false
    },
    {
        name: 'tanya',
        age: 20,
        isAdmin: true
    },
    {
        name: 'lexa',
        age: 23,
        isAdmin: false
    },
    {
        name: 'petya',
        age: 24,
        isAdmin: false
    }
]

let simpleUsers = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        simpleUsers++
    }
}

console.log(simpleUsers)
