import React, { useState } from "react"

const Question = ({ question, listOfAnswers, checkAnswer }) => {
    const [answers, setAnswers] = useState(listOfAnswers)

    return (
        <div>
            <div className="question">{question}</div>
            <div className="ChoseAnswer">
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => { checkAnswer(answer) }}
                    > <div className="answer" >{answer}</div></button>
                ))}
            </div >
        </div>
    )
}

export default Question



