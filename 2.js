function findTopStudent(school, courseName) {
    const { students } = school;
    let topStudent = null;
    let maxScore = -1;
  
    students.forEach(student => {
      const { name, className, scores } = student;
      if (scores[courseName] > maxScore) {
        maxScore = scores[courseName];
        topStudent = { name, className, scores };
      }
    });
  
    return topStudent;
  }
  
  console.log(findTopStudent(school, 'math'));
  