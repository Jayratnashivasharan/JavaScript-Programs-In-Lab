function* fib(num){
    let a = 0, b = 1;
    while(num--){
        yield a;
        [a, b] = [b, a + b];
    }
}
let gen = fib(10);
for(let value of gen){
    console.log(value);
}