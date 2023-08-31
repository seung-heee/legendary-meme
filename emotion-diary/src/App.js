import './App.css';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// component 
import MyButton from './component/MyButton';
import MyHeader from './component/MyHeader';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"App"}
          leftChild={<MyButton text={'왼쪽 버튼'} onClick={() => alert('왼쪽 버튼')} />}
          rightChild={<MyButton text={'오른쪽 버튼'} onClick={() => alert('오른쪽 버튼')} />} />
        <h2> App.js</h2>

        <MyButton
          text={'버튼'}
          onClick={() => alert('버튼 클릭')}
          type={'positive'} />

        <MyButton
          text={'버튼'}
          onClick={() => alert('버튼 클릭')}
          type={'negative'} />

        <MyButton
          text={'버튼'}
          onClick={() => alert('버튼 클릭')}
          type={''} />

        <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/diary/:id' element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
