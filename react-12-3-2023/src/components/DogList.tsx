import React, { useEffect, useState } from 'react'
import { DogModel } from '../models/DogModel';
import { getAllDogs } from '../webApi/DogsApi';
import DogCard from './DogCard';
import EmptyView from './EmptyView';

function DogList() {

    const [dogs, setDogs] = useState<DogModel[]>([]);

    // deconstruction
    // const dogs = useState..
    // const setDogs = useState..
    // use state = hook
    // <> = type safe
    // () = initial state

    // side effect + call to server
    useEffect(() => {

        getAllDogs()
            .then(res => setDogs(res.data)) // if success
            .catch(()=> alert("oy vey")); // if fail

    }, []) 

    // [] - when use effect will run

    // conditional rendering
    // <condition> ? if true : if false

  return (
      <div>
          {
              dogs.length != 0 ? dogs.map(dog => <DogCard {...dog} key={dog.id} />) : <EmptyView/>
          }
    </div>
  )
}

export default DogList
