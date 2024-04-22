function addNewDept(school, newDepartment) {
    const updatedDepartments = { ...school.departments, ...newDepartment };
    return { ...school, departments: updatedDepartments };
  }
  
  const newDepartment = { art: { teachers: 2, students: 50 } };
  console.log(addNewDept(school, newDepartment));
  