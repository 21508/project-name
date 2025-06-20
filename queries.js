// --- READ ---
// Извеждане на всички студенти
db.students.find();

// Студенти от Sofia, които харесват math
db.students.find({ city: "Sofia", interests: "math" });

// --- UPDATE ---
// Промяна на имейл на преподавател
db.instructors.updateOne(
  { name: "Dr. Ivan Georgiev" },
  { $set: { email: "ivan.georgiev@uni.bg" } }
);

// --- DELETE ---
// Изтриване на студент от Plovdiv
db.students.deleteOne({ city: "Plovdiv" });

// --- AGGREGATE ---
// Групиране на студенти по град
db.students.aggregate([
  { $group: { _id: "$city", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]);

// Средна оценка по курс
db.enrollments.aggregate([
  { $group: { _id: "$course_id", avg: { $avg: "$grade" } } },
  { $sort: { avg: -1 } }
]);
