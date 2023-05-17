import React from 'react'

// props - params 

interface DogCardProps{
    id: number,
    name: string,
    age: number
}

function DogCard(props: DogCardProps) {
  return (
      <div>
          <p>id: {props.id}</p>
          <p>name: {props.name}</p>
          <p>age: {props.age}</p>
    </div>
  )
}

export default DogCard