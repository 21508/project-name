// insert.js
// Създава и запълва пет колекции с примерни документи за университетска система.
// Колекция: students
// Добавяне на 10 студента с различни интереси и данни

db.students.insertMany([
  { name: "Ivan Ivanov", age: 21, city: "Sofia", interests: ["math", "sports"], phone: "0888123456" },
  { name: "Maria Petrova", age: 22, city: "Plovdiv", interests: ["biology", "reading"], phone: "0888777888" },
  { name: "Georgi Stoyanov", age: 23, city: "Varna", interests: ["programming", "math"], phone: "0888999444" },
  { name: "Elena Dimitrova", age: 20, city: "Burgas", interests: ["art", "design"], phone: "0899111222" },
  { name: "Petar Todorov", age: 24, city: "Sofia", interests: ["history"], phone: "0899444555" },
  { name: "Kristina Ivanova", age: 19, city: "Ruse", interests: ["music", "math"], phone: "0899333222" },
  { name: "Nikola Petrov", age: 22, city: "Stara Zagora", interests: ["physics"], phone: "0888222333" },
  { name: "Tanya Georgieva", age: 21, city: "Pleven", interests: ["chemistry", "sports"], phone: "0899000111" },
  { name: "Dimitar Dimitrov", age: 23, city: "Sofia", interests: ["programming"], phone: "0888000999" },
  { name: "Viktoria Kirova", age: 20, city: "Plovdiv", interests: ["languages", "travel"], phone: "0888777666" }
]);


//  Колекция: courses
// Добавяне на 10 курса с кредити и департаменти

db.courses.insertMany([
  { id: "CS101", title: "Intro to Programming", department: "Computer Science", credits: 5 },
  { id: "MATH201", title: "Calculus II", department: "Mathematics", credits: 4 },
  { id: "PHYS101", title: "General Physics", department: "Physics", credits: 5 },
  { id: "ENG101", title: "English Language", department: "Languages", credits: 3 },
  { id: "HIST301", title: "Modern History", department: "History", credits: 3 },
  { id: "BIO101", title: "Biology Basics", department: "Biology", credits: 4 },
  { id: "CHEM101", title: "Intro to Chemistry", department: "Chemistry", credits: 4 },
  { id: "CS202", title: "Databases", department: "Computer Science", credits: 5 },
  { id: "ART101", title: "Introduction to Art", department: "Arts", credits: 2 },
  { id: "STAT201", title: "Statistics", department: "Mathematics", credits: 4 }
]);


//  Колекция: instructors
// Добавяне на 10 преподаватели с имейл и офис

db.instructors.insertMany([
  { name: "Dr. Ivan Georgiev", department: "Mathematics", email: "ivan@uni.bg", office: { building: "A", room: 201 } },
  { name: "Prof. Elena Petrova", department: "Computer Science", email: "elena@uni.bg", office: { building: "B", room: 101 } },
  { name: "Dr. Nikolay Dimitrov", department: "Physics", email: "nikolay@uni.bg", office: { building: "C", room: 301 } },
  { name: "Dr. Maria Ivanova", department: "Biology", email: "maria@uni.bg", office: { building: "D", room: 202 } },
  { name: "Prof. Georgi Stanev", department: "History", email: "georgi@uni.bg", office: { building: "E", room: 102 } },
  { name: "Dr. Kristina Koleva", department: "Chemistry", email: "kristina@uni.bg", office: { building: "F", room: 110 } },
  { name: "Dr. Boris Mihov", department: "Arts", email: "boris@uni.bg", office: { building: "G", room: 205 } },
  { name: "Dr. Tanya Vasileva", department: "Languages", email: "tanya@uni.bg", office: { building: "H", room: 115 } },
  { name: "Dr. Veselin Kirov", department: "Mathematics", email: "veselin@uni.bg", office: { building: "A", room: 210 } },
  { name: "Prof. Petar Hristov", department: "Computer Science", email: "petar@uni.bg", office: { building: "B", room: 120 } }
]);

//  Колекция: departments
// Добавяне на 10 департамента с ръководител и сграда

db.departments.insertMany([
  { name: "Computer Science", building: "B", head: "Prof. Elena Petrova" },
  { name: "Mathematics", building: "A", head: "Dr. Ivan Georgiev" },
  { name: "Physics", building: "C", head: "Dr. Nikolay Dimitrov" },
  { name: "Biology", building: "D", head: "Dr. Maria Ivanova" },
  { name: "History", building: "E", head: "Prof. Georgi Stanev" },
  { name: "Chemistry", building: "F", head: "Dr. Kristina Koleva" },
  { name: "Arts", building: "G", head: "Dr. Boris Mihov" },
  { name: "Languages", building: "H", head: "Dr. Tanya Vasileva" },
  { name: "Statistics", building: "A", head: "Dr. Veselin Kirov" },
  { name: "Philosophy", building: "I", head: "Dr. Mariana Stoyanova" }
]);


//  Колекция: enrollments
// Добавяне на 10 записвания с студент, курс, семестър и оценка

db.enrollments.insertMany([
  { student_id: 1, course_id: "CS101", semester: "Spring 2025", grade: 5.50 },
  { student_id: 2, course_id: "MATH201", semester: "Spring 2025", grade: 5.00 },
  { student_id: 3, course_id: "PHYS101", semester: "Fall 2024", grade: 4.50 },
  { student_id: 4, course_id: "ENG101", semester: "Fall 2024", grade: 6.00 },
  { student_id: 5, course_id: "HIST301", semester: "Spring 2025", grade: 4.00 },
  { student_id: 6, course_id: "BIO101", semester: "Spring 2025", grade: 5.75 },
  { student_id: 7, course_id: "CHEM101", semester: "Fall 2024", grade: 5.25 },
  { student_id: 8, course_id: "CS202", semester: "Fall 2024", grade: 6.00 },
  { student_id: 9, course_id: "ART101", semester: "Spring 2025", grade: 5.00 },
  { student_id: 10, course_id: "STAT201", semester: "Spring 2025", grade: 5.80 }
]);
