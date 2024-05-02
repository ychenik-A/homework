function greeting(name) {
    return `hello ${name}`
}

const result = greeting('alex')
console.log(result)



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
function numbersAppraiser(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
}



