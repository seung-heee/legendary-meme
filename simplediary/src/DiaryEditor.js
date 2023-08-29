import { useState } from "react";

const DiaryEditor = () => {
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className="DiaryEditor">
            <h3>오늘의 일기</h3>
            <div>
                <input
                    name="author"
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value) }}
                />
            </div>
            <div>
                <textarea
                    name="content"
                    value={content}
                    onChange={(e) => { setContent(e.target.value) }}
                />
            </div>
        </div>
    )
}

export default DiaryEditor;