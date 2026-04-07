function* oddEven(num){
    if (num%2==0){
        yield("Number is EVEN");   
    }
    else{
        yield("Number is ODD");
    }
}
let gen=oddEven(4);
console.log(gen.next().value);
