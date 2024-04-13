const STUDENTS_DATA = [
    { firstName: "An", age: 20 },
    { firstName: "Bình", age: 22 },
    { firstName: "Cẩm", age: 21 },
    { firstName: "An", age: 19 }, 
  ];
  function findStudent(StudentName, newAge) {
    let newStudent =  STUDENTS_DATA.find( student => { return student.firstName == StudentName} );   
    newStudent.age = newAge;
    console.log( STUDENTS_DATA);    
  }

findStudent('An',30);
