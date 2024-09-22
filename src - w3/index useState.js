// import React, {useState} from "react";
import {useState} from "react";
import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

// return (
//   <>
//     <h1>My favorite color is {color}!</h1>
//     <button
//       type="button"
//       onClick={() => setColor("blue")}
//       >Blue</button>
//     <button
//       type="button"
//       onClick={() => setColor("red")}
//       >Red</button>
//     <button
//       type="button"
//       onClick={() => setColor("pink")}
//       >Pink</button>
//     <button
//       type="button"
//       onClick={() => setColor("green")}
//       >Green</button>
//   </>
// )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);

// function Car(){
//   const [brand, setBrand] = useState("Ford");
//   const [model, setModel] = useState("Mustang");
//   const [year, setYear] = useState("1964");
//   const [color, setColor] = useState("red");

//   return(
//     <>
//     <h1>My {brand}</h1>
//     <p>
//       It is a {color} {model} from {year}.
//     </p>
//     </>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);

function Car(){
  const [car,setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor =() =>{
    setCar(previousState => {
      return { ...previousState, color: "blue"}
    });
  }
  return(
    <>
    <h1>My {car.brand}</h1>
    <p>
      It is a {car.color} {car.model} from {car.year}.
    </p>
    <button 
      type="button"
      onClick={updateColor}
      >Blue</button>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);