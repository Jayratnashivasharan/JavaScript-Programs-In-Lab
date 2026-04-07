let str=["Honey","Bunny","Jay"];
let it=str[Symbol.iterator]();
let result=it.next();
while(!result.done){
    console.log(result.value);
    result=it.next();
}