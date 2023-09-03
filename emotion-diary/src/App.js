import React, { useReducer, useRef } from 'react';
import './App.css';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      const newItem = {
        ...action.data
      };
      newState = [newItem, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((it) => it.id === action.data.id ? { ...action.data } : it);
      break;
    }
    default:
      return state;
  }
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: '오늘의 일기 1',
    date: 1693744154124,
  },
  {
    id: 2,
    emotion: 4,
    content: '오늘의 일기 3',
    date: 1693744154125,
  },
  {
    id: 3,
    emotion: 3,
    content: '오늘의 일기 4',
    date: 1693744154130,
  },
  {
    id: 4,
    emotion: 3,
    content: 'dddd오늘의 일기4',
    date: 1693744154131,
  }, {
    id: 5,
    emotion: 3,
    content: '오늘의 ss일기 4',
    date: 1693744154132,
  }
]

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);
  // create
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion
      }
    })

    dataId.current += 1;
  };

  // remove
  const onRemove = (targetId) => {
    dispatch({ type: 'REMOVE', targetId });
  }
  // edit
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      date: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };


  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{
        onCreate, onRemove, onEdit
      }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<New />} />
              <Route path='/edit' element={<Edit />} />
              <Route path='/diary/:id' element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;