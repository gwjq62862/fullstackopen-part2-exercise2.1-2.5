import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
    const total=parts.reduce((acc,cu)=>acc+cu.exercises,0)
    return (
        <div>
            {parts.map((part) => (
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            ))}

  <h1>total exercise:{total}</h1>
        </div>
    )
}

export default Content