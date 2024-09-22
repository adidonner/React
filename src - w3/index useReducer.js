// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [InputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current +1;
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={InputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         />
//         <h1>Render Count: {count.current}</h1>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// import { useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App(){
//   const inputElement = useRef();

//   const focusInput = () => {
//     inputElement.current.focus();
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App(){
  const [InputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = InputValue;
  }, [InputValue])


  return (
    <>
      <input
        type="text" 
        value={InputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        />
      <h2>Current Value: {InputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);