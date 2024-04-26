add()
function add(){
    console.log(2+3)
}
add()

// add2() i cant call add2() because the variable add2 will only be initialized in next line
let add2 = function(){
    console.log(3+3)
}
add2()

let add3 = function(a, b){
    console.log(a+b)
}
add3(1,2)

function add4(a,b){
    console.log(a+b)
}
add4(10,11)