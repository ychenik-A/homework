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
// console.log(user.i)
user.i.hello('Aleksandr')

// =================================================================


