import React from 'react'

import'./TopDisplay.css'

const topDisplay = (props) => (
    <div className="TopDisplay">
        <h1>{props.title}</h1>
    </div>
)

export default topDisplay