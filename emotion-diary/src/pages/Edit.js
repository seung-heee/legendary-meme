import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate(); // 페이지 이동시킬 수 있는 함수 반환, 인자로 경로 작성
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get('id');
    const mode = searchParams.get('mode');
    console.log(id, mode);

    return (
        <div className="Edit">
            Edit
            <button onClick={() => setSearchParams({ who: 'tmdgml' })}>
                QS 바꾸기</button>

            <button onClick={() => {
                navigate('/home')
            }}>홈으로 가기</button >

            <button onClick={() => {
                navigate(-1); // -1 : 이전 페이지로 이동
            }}>뒤로가기</button>
        </div >
    );
};

export default Edit;
