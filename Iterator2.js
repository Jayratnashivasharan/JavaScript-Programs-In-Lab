let a=["A","B","C"];
let it=a[Symbol.iterator]();
let result=it.next();
while(!result.done){
    console.log(result.value);
    result=it.next();
}