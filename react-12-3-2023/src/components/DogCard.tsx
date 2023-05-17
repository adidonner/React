import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { DogModel } from '../models/DogModel';

// props
// interface DogProps{
//     dog: DogModel;
// }

function DogCard(dog: DogModel) {

  return (
      <div>
          <p>Id: {dog.id}</p>
          <p>Name: {dog.name}</p>
          <p>Age: {dog.age}</p>      
          <button><Link to={"/delete-dog/"+dog.id}>delete dog</Link></button>
    </div>
  )
}

export default DogCard