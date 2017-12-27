import React from 'react'

import'./TopDisplay.css'

const topDisplay = (props) => (
    <div className={props.colorChoice}>
        <h1>{props.title}</h1>
    </div>
)

export default topDisplay