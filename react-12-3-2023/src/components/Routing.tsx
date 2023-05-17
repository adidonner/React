import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../layout/Home';
import Page404 from '../layout/Page404';
import About from './About';
import DeleteDog from './DeleteDog';
import DogList from './DogList';

function Routing() {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route index element={<Home />} />
              <Route path="/all-dogs" element={<DogList />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/add-dog" element={<AddDog />} />
              <Route path="/update-dog/" element={<UpdateDog />} />*/}
              <Route path="/delete-dog/:id" element={<DeleteDog />}/> 
              <Route path="*" element={<Page404 />} />

          </Routes>
    </div>
  )
}

export default Routing