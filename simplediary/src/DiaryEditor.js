import { useRef, useState } from "react";

const DiaryEditor = () => {
    // useRef : DOM 조작
    const authorInput = useRef();
    const contentInput = useRef();

    // useState : 동작이 비슷한 State 묶기, state 객체 형태로
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    })

    const handleChangeState = (e) => {
        setState({
            ...state,
            // 변경된 key : value
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        if (state.author.length < 1) {
            // alert은 트렌디 하지 않다 ~
            // alert("작성자 최소 1글자 이상 입력");
            authorInput.current.focus(); // useRef로 focus 기능 사용
            return;
        }
        if (state.content.length < 5) {
            // alert("본문 최소 5글자 이상 입력");
            contentInput.current.focus();
            return;
        }

        alert('저장 성공!');
    }

    return (
        <div className="DiaryEditor">
            <h3>오늘의 일기</h3>
            <div>
                <input
                    ref={authorInput}
                    name="author"
                    value={state.author}
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <textarea
                    ref={contentInput}
                    name="content"
                    value={state.content}
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    )
}

export default DiaryEditor;