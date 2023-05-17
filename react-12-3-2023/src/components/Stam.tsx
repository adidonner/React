import React, { useEffect, useState } from 'react'

function Stam() {

    const [stam, setStam] = useState<number>(0);

    useEffect(() => {
        console.log(stam)
    }, [stam])

  return (
      <div>
          <button onClick={() => setStam(stam+1)}>click</button>
    </div>
  )
}

export default Stam