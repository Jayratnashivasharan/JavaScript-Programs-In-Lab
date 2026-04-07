let data = {
  students: [
    { name: "Jay", marks: 90 },
    { name: "Honey", marks: 95 },
    { name: "Bunny", marks: 85 }
  ]
};

// Define a generator function
function* studentGenerator(students) {
  for (let student of students) {
    yield student; // yield each student object
  }
}

// Create generator object
let gen = studentGenerator(data.students);

// Iterate through generator
for (let student of gen) {
  console.log(student);
}