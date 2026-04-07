function* table(num){
    for(let i=1;i<=10;i++){
        yield num*i;
    }
}
for(let value of table(5)){
    console.log(value);
    
}