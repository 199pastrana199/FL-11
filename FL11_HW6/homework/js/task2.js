let A = prompt('Enter side A', '');
let B = prompt('Enter side B', '');
let C = prompt('Enter side C', '');
if (A+B > C && B+C > A && A+C > B, A === B && A === C && B === C) {
   console.log('Eequivalent triangle')
} else if (A+B > C && B+C > A && A+C > B && A === B || B === C) {
       console.log('‘Isosceles triangle’')
    } else if (A+B > C && B+C > A && A+C > B) {
           console.log('Normal triangle') 
} else {
 console.log('Triangle doesn’t exist') 
}