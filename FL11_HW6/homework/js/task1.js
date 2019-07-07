let A1 = +prompt('Enter coordinates A1', '0');
let A2 = +prompt('Enter coordinates A2', '0');
let B1 = +prompt('Enter coordinates B1', '0');
let B2 = +prompt('Enter coordinates B2', '0');
let C1 = +prompt('Enter coordinates C1', '0');
let C2 = +prompt('Enter coordinates C2', '0');
let half=2;

if ((A1 + B1) / half === C1 && (A2 + B2) / half === C2) {
    console.log(true);
} else {
    console.log(false);
}