import React from 'react'

const answerFields = (props) => (
    <div>
        <form onSubmit={props.clicked} refs="form">        
        <h1>Enter Your Answer</h1>
        <input type="text" onChange={props.changed}/>
        <button type="submit">Submit</button>
        </form>
    </div>
)

export default answerFields