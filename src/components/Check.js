import React from "react"


const Check = ({ isCorrectAnswer, newGame }) => {

    return (

        <div>
            <div className="checkTheQuestion">
                {isCorrectAnswer ?
                    "Yes.. that was the right answer!" :
                    "OH nooo...that was wrong!"}
            </div>

            <br />

            <button
                className="nextQuestion"
                onClick={newGame}

            >next question</button>


        </div>
    )
}

export default Check



