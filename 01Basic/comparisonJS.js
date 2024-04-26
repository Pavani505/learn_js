let one = "apple" // literal
let two = new String("apple") // object
console.log(one === two)
console.log(one == two)

let num = 1
let numstr = '1'
console.log(num === numstr)
console.log(num == numstr)

let a = '1'
let b = '10'
console.log(a+b)

let a1 = 1
let b1 = 10
console.log(a1+b1)

let firstName = 'Andre'
let lastName = ' Pavani'
console.log(firstName.concat(lastName))

let fullName = firstName.concat(lastName)
console.log(fullName)

let phrase = 'Starts with something'
console.log(phrase.startsWith('starts'))
console.log(phrase.startsWith('Starts'))
console.log(phrase.startsWith('s'))
console.log(phrase.startsWith('S'))
console.log(phrase.startsWith('Starts '))
console.log(phrase.startsWith('Starts wi'))

console.log(phrase.endsWith('something'))
console.log(phrase.endsWith('somethin'))
console.log(phrase.endsWith(''))
console.log(phrase.endsWith('g'))

console.log(phrase.search('t')) //to see the position in the string
console.log(phrase.includes('t')) //to see if its included in the string - returns a boolean