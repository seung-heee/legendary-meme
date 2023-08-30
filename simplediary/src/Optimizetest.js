import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
    useEffect(() => {
        console.log('A', count);
    })
    return <div>{count}</div>
})

// 객체에 담긴 값은 얕은 비교(주소)를 하기 때문에 값이 변하지 않아도 리렌더링 발생
// 객체의 주소에 대한 비교
const CounterB = ({ obj }) => {
    useEffect(() => {
        console.log('B', obj.count);
    })
    return <div>{obj.count}</div>
}

// React.memo의 비교 함수로 작용, 값 비교로 판단
const areEqual = (prevProps, nextProps) => {
    return prevProps.obj.count === nextProps.obj.count;
} // true : reRendering X


// CounterB는 areEqual 함수의 판단에 따라 reRendering 여부 결정됨.
const MemoizedCounterB = React.memo(CounterB, areEqual);

const Optimizetest = () => {
    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({
        count: 1
    })

    return (
        <div style={{ padding: 50 }}>
            <div>
                <h2>Counter A</h2>
                <CounterA count={count} />
                <button onClick={() => setCount(count)}>A button</button>
            </div>
            <div>
                <h2>Counter B</h2>
                <MemoizedCounterB obj={obj} />
                <button onClick={() => setObj({ count: obj.count })}>B button</button>
            </div>
        </div >
    )
}

export default Optimizetest;