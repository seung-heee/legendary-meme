import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useState, useRef } from 'react';

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

  // 삭제
  const onDelete = (targetId) => {
    console.log(`${targetId}번째 일기가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      {/* props 내려서 list rendering */}
      <DiaryList onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
