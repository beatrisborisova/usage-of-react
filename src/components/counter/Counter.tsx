import { useState } from "react"

export function Counter() {

    const [counter, setCounter] = useState(0)
    let title = 'Counter'

    const increaseCounter = () => {
        setCounter(counter => counter + 1)
    }

    const decreaseCounter = () => {
        setCounter(counter => counter - 1)
    }

    if (counter > 5 && counter < 15) {
        title = 'Counter level 2'
    } else if (counter >= 15 && counter < 20) {
        title = 'Counter level 3'
    } 


    return (
        <div>
            <h1>Counter here</h1>
            <p>{title}</p>
            {/* <button onClick={increaseCounter}>+</button> */}
            <button onClick={() => increaseCounter()}>+</button>
            <p>{counter}</p>
            <button onClick={() => decreaseCounter()}>-</button>
        </div>
    )
}