// Nested function.
// Closure is related to the nested function.
// 

function toggler(a,b,c) {

    return function () {

        console.log(a) 

        return function() {

            console.log(b) 
            
            return function() {

                console.log(c) 
            }
        } 
    }
}
const toggle = toggler (1,2,3) ;
// console.log(toggle())
const x = toggle() ;
const y = x() ;
const z = y() ;
 

