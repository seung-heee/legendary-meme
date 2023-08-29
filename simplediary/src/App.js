import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: "작성111자",
    content: " ㅎㅇ",
    emotion: 4,
    created_date: new Date().getTime()
  }, {
    id: 2,
    author: "작성3자2",
    content: " ㅎㅇ",
    emotion: 5,
    created_date: new Date().getTime()
  }, {
    id: 3,
    author: "작성자2",
    content: " ㅎㅇ",
    emotion: 1,
    created_date: new Date().getTime()
  }, {
    id: 4,
    author: "작성자3",
    content: " ㅎgdgdㅇ",
    emotion: 2,
    created_date: new Date().getTime()
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
