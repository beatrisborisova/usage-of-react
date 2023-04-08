import { useState } from "react"

export function Timer() {
    const [timer, setTimer] = useState(0)
    const [randomNumber, setRandomNumber] = useState(0)

    setTimeout(() => {
        setTimer(timer + 1)
        setRandomNumber(Math.random())
    }, 1000)

    if (timer > 10) {
        return <div>MORE THAN 10</div>
    } else {
        // return <h2>in Else</h2>
    }

    return (
        <div>
            {timer}
            <h1>Timer: {timer >= 10 ? 'More or equal to 10' : 'Less than 10'}</h1>
            <h2>Timer2: {timer > 10 && <div>Timer's value is more than 10</div>}</h2>
            {/* <p>Random number: {randomNumber}</p> */}
        </div>
    )
}