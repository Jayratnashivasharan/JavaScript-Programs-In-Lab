// Write a code using object data which contains array of student having name and marks attribute create using iterator.
let data={
students:[
    {name:"Jay",marks:90},
    {name:"Honey",marks:95},
    {name:"Bunny",marks:85}
]
};
let it=data.students[Symbol.iterator]();
let result=it.next();
while(!result.done){
    console.log(result.value);
    result=it.next();
}