function highestStudentCountDepartment(school) {
    let maxStudents = -1;
    let deptWithMaxStudents = '';
  
    for (const dept in school.departments) {
      if (school.departments.hasOwnProperty(dept)) {
        const { students } = school.departments[dept];
        if (students > maxStudents) {
          maxStudents = students;
          deptWithMaxStudents = dept;
        }
      }
    }
  
    return deptWithMaxStudents;
  }
  
  console.log(highestStudentCountDepartment(school));
  