
//default parameter
function sum(a, b = 0) {
    console.log(a + b);
}

sum(10);
sum(10, 20);

//rest parameter
function print(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

print(10, 20, 30, 40, 50, 60, 70);