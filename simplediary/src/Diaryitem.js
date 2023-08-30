import { useRef, useState } from 'react';
import './App.css';

const Diaryitem = ({ onEdit, onRemove, author, content, created_date, emotion, id }) => {
    const [isEdit, setisEdit] = useState(false); // 수정 state
    const toggleIsEdit = () => setisEdit(!isEdit); // 반전연산, 토글

    const [localContent, setlocalContent] = useState(content);
    const localContentInput = useRef();

    const handleRemove = () => { // 삭제
        if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
            onRemove(id);
        };
    }

    const handleQuitEdit = () => { // 수정 취소
        setisEdit(false);
        setlocalContent(content);
    }

    const handleEdit = () => {
        if (localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }

        if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`));
        onEdit(id, localContent);
        toggleIsEdit(); // 수정폼 닫기
    }

    return (
        <div className="Diaryitem">
            <div className="info">
                <span>작성자 : {author} | 감정점수 : {emotion} </span><br />
                <span className="date">{new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">
                {isEdit ?
                    <>
                        <textarea value={localContent} ref={localContentInput}
                            onChange={(e) => {
                                setlocalContent(e.target.value);
                            }} />
                    </> :
                    <>{content}</>}
            </div>
            {isEdit ?
                <>
                    <button onClick={handleQuitEdit}>수정취소</button>
                    <button onClick={handleEdit}>수정완료</button>
                </>
                : <>
                    <button onClick={handleRemove}>삭제하기</button>
                    <button onClick={toggleIsEdit}>수정하기</button>
                </>}

        </div >
    );
}

export default Diaryitem;