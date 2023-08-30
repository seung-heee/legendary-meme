import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useRef, useEffect, useMemo, useCallback, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE':
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date
      }
      return [newItem, ...state];
    case 'REMOVE':
      return state.filter((it) => it.id !== action.targetId);
    case 'EDIT': {
      return state.map((it) =>
        it.id === action.targetId ?
          { ...it, content: action.newContent } : it)
    }
    default:
      return state;
  }
}

function App() {
  // const [data, setData] = useState([]); // 일기 리스트 담길 빈 배열
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0); // unique key

  // 비동기함수
  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1, // 0~4까지 랜덤난수 생성
        created_date: new Date().getTime(),
        id: dataId.current++,
      }
    })
    dispatch({ type: 'INIT', data: initData });
    // setData(initData);
  };

  useEffect(() => {
    getData();
  }, [])

  // 일기 추가
  const onCreate = useCallback((author, content, emotion) => {
    dataId.current += 1;
    dispatch({
      type: 'CREATE',
      data: { author, content, emotion, id: dataId.current },
    })
    //setData((data) => [newItem, ...data]); // 함수형 업데이트
  }, []);

  // 삭제
  const onRemove = useCallback((targetId) => {
    dispatch({
      type: 'REMOVE', targetId
    })
    // setData(data => data.filter((it) => it.id !== targetId));
  }, []);

  // 수정
  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: 'EDIT', targetId, newContent })
    // setData((data) => data.map((it) => it.id === targetId ?
    //   { ...it, content: newContent } : it))
  }, []);

  // 함수가 아니라 값을 return함, getDiaryAnaiysis는 함수 X
  const getDiaryAnaiysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;

    return { goodCount, badCount, goodRatio };
  }, [data.length]); // 데이터의 길이가 변하지 않으면 렌더링 할 필요없음, 연산 최적화

  const { goodCount, badCount, goodRatio } = getDiaryAnaiysis; // 함수로 호출하면 에러

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율: {goodRatio}</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
