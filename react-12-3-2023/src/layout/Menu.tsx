import React from 'react'
import { Link } from 'react-router-dom';
import "./Menu.css";

function Menu() {

  const renderMenu = () => {
    switch (user.type) {
      case "ADMIN":
        return (<>links to admin components</>)
      case "CIMPANYY":
        return (<>company</>)
    }
  }

  return (
    <div className="menu">

      {user.type == "admin" ? <>admin components (links)</> : <></>}
      {renderMenu()}

      <Link to="/all-dogs">all dogs</Link><br/>
      <Link to="/add-dog">add dog</Link><br/>
      <Link to="/about">about</Link>

      {/* <Route path="/" element={<Home />} />
              <Route index element={<Home />} />
              <Route path="/all-dogs" element={<DogList />} />
              {/* <Route path="/add-dog" element={<AddDog />} />
              <Route path="/update-dog/" element={<UpdateDog />} />
              <Route path="/delete-dog/" element={<DeleteDog />}/> */}
              {/* <Route path="*" element={<Page404 />} /> */} 

    </div>
  )
}

export default Menu