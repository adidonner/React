import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// // render forever
// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count +1);
//     }, 1000);
//     console.log(count) // I put to see console
//   });

//   return <h1>I have rended {count} times!</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);

// // runs only on the first render 
// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count +1);
//     }, 1000);
//   }, []); //  <- The change is here, add the empty brackets

//   return <h1>I have rended {count} times!</h1>
// }

// // If the count variable updates, the effect will run again
// function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//     <p>Count: {count}</p>
//     <button onClick={() => setCount((c) => c + 1)}>+</button>
//     <p>Calculation: {calculation}</p>
//     </>
//   )

// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Counter />);

// // I tried to add a dependency the variable "nice"
// function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);
//   const [nice, setNice] = useState(101); // useEffect works one time before and starts with 100 before the click

//   useEffect(() => {
//     setCalculation(() => count * 2);
//     setNice(() => nice-1 );
//   // eslint-disable-next-line react-hooks/exhaustive-deps 
//   }, [count], [nice]); // <- add the [nice] variable here and the strange line up here

//   return (
//     <>
//     <p>Count: {count}</p>
//     <button onClick={() => setCount((c) => c + 1)}>+</button>
//     <p>Calculation: {calculation}</p>
//     <p>Nice: {nice}</p>
//     </>
//   )

// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Counter />);

// Effect Cleanup
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer)
    },[]);

  return <h1>I've rended {count} times!</h1>
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

