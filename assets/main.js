// 1. Construct an object about this course. It must contain at least five properties. The values of those properties should be EITHER strings or integers.
const course = {
  name: `Web Design`,
  teacher: `Rob Dominguez`,
  grade: 98,
  students: 15,
  description: `Man, I really hate that course name. But, here we are. In this class, you'll learn a lot about the design and development of webpages and websites. Hold on for a fun year of building, hacking, and learning!
`,
}
// 2. Write a statement that will log some information about your course to the console using dot-notation.
console.log(`${course.name} is taught by ${course.teacher}. There are ${course.students} in the class.`);
// 3. Construct a second object about ANOTHER course. It should have the SAME properties, but obviously different values.
  const design = {
  name: `Ceramics`,
  teacher:`Casey Gillespie`,
  grade: 100,
  students: 20,
  description:`In this course we will learn how to make our own art using clay and a furance`,
}
// 4. Write a function which accepts a course as an argument and that uses dot-notation to output some information to the console from your object.
// You should be able to plug either course in as an argument and the function should work!
function info(education) {
  console.log(`${education.name} is a class`);
  return education;
}

info(course);
info(design);
// 5. Write a function that contains two statements: one that modifies the value of a property from either course object, and a second statement
// that alerts the user, via the console, about the modification. The function should accept two arguments: the object you're modifying and the
// new value that's being assigned to a property.

function updateCourse(aCourse, newName){
  //modify name of property
  aCourse.name = newName;
  //console.log about the updateCourse
  console.log(`The course title has been updated to :${aCourse.name}`);
};
// 6. Create an array called `myCourses` that contains an object for at least four of your courses (you can re-use the two from above).
// Use the .map() method to invoke the function below for each course in the array. Your courses will need, at least, properties of `title`, `subject`, `instructor`.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const myCourses = [course, design];
myCourses.map((course) => {
  console.log(`${course.teacher} teaches ${course.name}. ${design.teacher} is part of the Fine Arts department`);
)};

talkAboutMyCourses(course) {
  console.log(
    `${anyCourse.title} is a course about ${anyCourse.subject}. The course is taught by, ${anyCourse.instructor}.`
  );
}

// Create your array for #6 down here and invoke the .map() function after it.
