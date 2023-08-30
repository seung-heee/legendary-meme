import React, { useEffect, useState } from 'react';

const UnmountTest = () => {
    useEffect(() => {
        console.log('Mount!');

        return () => {
            // Unmount 시점에 실행
            console.log("UnMount!");
        };
    }, []);

    return (
        <div>Unmount testing Component</div>
    )
}

const LifeCycle = () => {
    const [isVisible, setisVisible] = useState(false);
    const toggle = () => setisVisible(!isVisible); // boolean toggle

    return (
        <div style={{ padding: 20 }} className="LifeCycle">
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest />}
        </div>
    )
}

export default LifeCycle;