// Write a code using object data which contains array of student having name and marks attribute create using iterator.

let data={
    students:[
        {name:"Honey",marks:90},
        {name:"Bunny",marks:80},
        {name:"Jay",marks:70}
    ]
};
for(let student of data.students){
    console.log(student.name+" "+student.marks);
    
}