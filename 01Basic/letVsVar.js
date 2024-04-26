// const its imutable, if try to add a new value to this const it will breaks the code

// const panNumber = '123456'
// console.log(panNumber)
// panNumber = '1234567'
// console.log(panNumber)

let panNumber = '123456'
console.log(panNumber)
panNumber = '1234567'
console.log(panNumber)

var panNumber1 = '123456'
console.log(panNumber1)
panNumber1 = '1234567'
console.log(panNumber1)

function counter(){
    for(var i = 0; i < 5; i++){
        console.log(i) // print until i < 5]
    }
    console.log(i) // print when i is out of the loop, in this case the value is 5
}
counter()

function otherfunction(){
    var i = 1
    console.log(i)
    counter()
}
otherfunction()