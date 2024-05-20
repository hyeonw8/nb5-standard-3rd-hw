import { v4 as uuidv4 } from 'uuid';
import './App.css'

export default function App() {
  const students = [
    { name: 'Alice', age: 17, grade: 'A' },
    { name: 'Bob', age: 18, grade: 'B' },
    { name: 'Charlie', age: 16, grade: 'C' },
    { name: 'Diana', age: 19, grade: 'D' },
  ];

  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((student) => student.age >= 18);

  const onClickHandler = (student) => {
    alert(
      `${student.name}의 나이는 ${student.age}이고, 점수는 ${student.grade}입니다.`
    );
    return;
  };

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {/* TODO: map을 사용해서 filteredStudents를 여기에 렌더링하세요. */}
        {filteredStudents.map((student) => {
          return (
            <li key={uuidv4()} onClick={() => onClickHandler(student)} className='student_name'>
              {student.name}
            </li>
           
          );
        })}
        {/* TODO: 학생이름을 클릭하면 나이와 점수가 alert 돼야 해요.*/}
      </ul>
    </div>
  );
}