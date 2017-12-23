import React from 'react'

const answerFields = (props) => (
    <div className="container">
        <form onSubmit={props.clicked} refs="form">
        <div className="form-group">
        <h1>Enter Your Answer</h1>
        <input className='form-control' type="text" onChange={props.changed}/>
        </div>
        <button className="btn btn-success" type="submit">Answer</button>
        
        </form>
    </div>
)

export default answerFields