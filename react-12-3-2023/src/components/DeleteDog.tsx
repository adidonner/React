import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteDog } from '../webApi/DogsApi'

function DeleteDog() {

    let navigate = useNavigate();
    const params = useParams();
    const id= +(params.id || "");

    const yesDeleteDog = () => {
        deleteDog(id)
            .then(() => {
                navigate("/all-dogs")
        })
            .catch(() => {
                alert("not deleted")
                navigate("/")
        })
}


    const noDeleteDog = () => {
        navigate("/all-dogs")
    }

    // modal
  return (
      <div>
          Do you want to delete dog?
          <button onClick={() => yesDeleteDog()}>yes</button>
          <button onClick={() => noDeleteDog()}>no</button>
    </div>
  )
}

export default DeleteDog