University MongoDB Database

Описание
Тази база данни моделира университетска система с информация за студенти, курсове, преподаватели, департаменти и записвания.

Колекции и структура

`students`
- `name` (string)
- `age` (number)
- `city` (string)
- `interests` (array)
- `phone` (string)

 `courses`
- `id` (string)
- `title` (string)
- `department` (string)
- `credits` (number)

 `instructors`
- `name` (string)
- `department` (string)
- `email` (string)
- `office` (object: building, room)

 `departments`
- `name` (string)
- `building` (string)
- `head` (string)

 `enrollments`
- `student_id` (number)
- `course_id` (string)
- `semester` (string)
- `grade` (number)

Инсталация
1. Инсталирай MongoDB и MongoDB Compass или използвай MongoDB Atlas.
2. Създай база с име `university`.
3. Стартирай `insert.js` за да добавиш данни:
