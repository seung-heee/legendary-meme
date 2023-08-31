import { useParams } from "react-router-dom";

const Diary = ()=> {
    const { id } = useParams(); // 사용자 정의 훅

    return (
        <div className="Diary">
            Diary
        </div>
    );
};

export default Diary;