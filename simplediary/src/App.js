import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useState, useRef } from 'react';

// const dummyList = [
//   {
//     id: 1,
//     author: "작성111자",
//     content: " ㅎㅇ",
//     emotion: 4,
//     created_date: new Date().getTime()
//   }, {
//     id: 2,
//     author: "작성3자2",
//     content: " ㅎㅇ",
//     emotion: 5,
//     created_date: new Date().getTime()
//   }, {
//     id: 3,
//     author: "작성자2",
//     content: " ㅎㅇ",
//     emotion: 1,
//     created_date: new Date().getTime()
//   }, {
//     id: 4,
//     author: "작성자3",
//     content: " ㅎgdgdㅇ",
//     emotion: 2,
//     created_date: new Date().getTime()
//   },
// ]

function App() {
  const [data, setData] = useState([]); // 일기 리스트 담길 빈 배열

  const dataId = useRef(0); // unique key

  // 새로운 일기 추가
  // DiaryEditor.js 일기저장 성공시 -
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author, content, emotion, created_date,
      id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]); // 일기 리스트 담긴 배열 state 변경
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      {/* props 내려서 list rendering */}
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
