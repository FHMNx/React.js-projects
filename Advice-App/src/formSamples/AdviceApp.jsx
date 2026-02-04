import React, { useEffect, useState } from 'react'
import "./AdviceApp.css"

const AdviceApp = () => {

    const [advice, setAdvice] = useState("please click this button to get advice");
    const [count, setCount] = useState(0);

    async function getAdvice() {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        console.log(data)
        setAdvice(data.slip.advice)
        setCount((c) => c + 1)
    }

    useEffect(function () {
        getAdvice();
    }, []);

    return (
        <div>
            <h3>{advice}</h3>
            <button onClick={getAdvice}>Get Advice</button>
            <Counter count={count}/>
        </div>
    )
}

function Counter(props) {
    return (
        <p>you have read  <b>{props.count}</b> pieces of advice</p>
    )
}

export default AdviceApp
