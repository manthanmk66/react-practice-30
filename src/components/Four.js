import React from 'react'

const Four = () => {
    const items=["India","Australia","England","Japan"];

  return (
    <div>
        <ul>
            {items.map((e)=>(
            <li>{e}</li>
            ))
            }
        </ul>

    </div>
  )
}

export default Four;