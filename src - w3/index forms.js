import { useState } from "react";
import ReactDOM from 'react-dom/client'

// function MyForm() {
//   const [name, setName] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert( `The name you entered was: ${name}`)
//   }

//   return (

//     <form onSubmit={handleSubmit}>
//     <label>Enter your name:
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         />
//     </label>
//   </form>
//       )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//     // const numberofcars = event.target.value;
//     // setInputs(values => ({...values, [name]: value, [name]: numberofcars}))
//   }
  
//   const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log(inputs)
//   // alert(inputs.username + " you are "+ inputs.age + " years old.");
// }

// return (
//   <form onSubmit={handleSubmit}>
//     <label>Enter your name:
//       <input
//       type="text"
//       name="username"
//       value={inputs.username || ""}
//       onChange={handleChange}
//       />
//     </label>
//     <label>Enter you age:
//       <input
//         type="number"
//         name="age"
//         value={inputs.age || ""}
//         onChange={handleChange}
//         />
//     </label>
   
//     {/* <label>How many cars do you have?:
//       <input
//         type="number"
//         name="numberofcars"
//         value={inputs.numberofcars || ""}
//         onChange={handleChange}
//         />
//     </label> */}
//     <input type="submit" />
//   </form>
// )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);


function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);