import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from '../App';
import MyButton from './../component/MyButton';
import MyHeader from './../component/MyHeader';
import DiaryList from "../component/DiaryList";
import DiaryItem from "../component/DiaryItem";

const Home = () => {
    const diaryList = useContext(DiaryStateContext);
    const [data, setDate] = useState([]);

    const [curDate, setCurDate] = useState(new Date());
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

    useEffect(() => {
        if (diaryList.length >= 1) {
            const firstDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth(),
                1
            ).getTime();

            const lastDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth() + 1,
                0
            ).getTime();

            setDate(diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay));
        }
    }, [diaryList, curDate])

    const increaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()));
    }
    const decreaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()));
    }

    return (
        <div className="Home">
            <MyHeader
                headText={headText}
                leftChild={<MyButton text={'<'} onClick={decreaseMonth} />}
                rightChild={<MyButton text={'>'} onClick={increaseMonth} />} />
            <DiaryList diaryList={data} />
        </div>
    )
}

export default Home;
