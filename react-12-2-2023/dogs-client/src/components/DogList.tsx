import React, { useState } from 'react'
import { useEffect } from 'react'
import { DogModel } from '../models/DogModel'
import { getAllDogs } from '../webApi/DogsApi'
import DogCard from './DogCard'

function DogList() {

    // hooks:
    // useEffect - side effect

    // let stam = 1;

    // const [stam, setStam] = useState<number>(0);

    // useEffect(() => {
        
    //     console.log(stam)
    // }, [stam])

    // useState

        // store data - useState
    const [dogs, setDogs] = useState<DogModel[]>([]) // find all

    // call to server - useEffect
    useEffect(() => {
        getAllDogs()
            .then(res => {
                setDogs(res.data)
                console.log("got dogs")
            }) // if success
        .catch(() => console.log("woof woof")) // if fail (advice/exception)
    }, []) // [] - only once

    // render dogs (DogCard)
  return (
      <div>
          {dogs.map(dog => <DogCard key={dog.id} id={dog.id} name={dog.name} age={dog.age}/>)}
    </div>
  )
}

export default DogList