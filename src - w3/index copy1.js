import React from 'react';
import ReactDOM from 'react-dom/client';

// function MissedGoal() {
//   return <h1>MISSED</h1>;
// }

// function MadeGoal() {
//   return <h1>GOAL!</h1>
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal/>
//   }
//   return <MissedGoal/>
// }

// // another way of function Goal(props) using ternary operator
// function Goal(props) {
  //   const isGoal = props.isGoal;
  //   return (
//     <>
//       { isGoal ? <MadeGoal/> : <MissedGoal/>}
//     </>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Goal isGoal={true} />)

// function Garage(props) {
  //   const cars = props.cars;
  //   return (
    //     <>
//       <h1> Garage</h1>
//       {cars.length > 0 &&
//       <h2>
//         You have {cars.length} cars in your garage.
//       </h2>
//       }
//     </>
//   );
// }

// const cars = [];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage cars={cars} />);

// function Car(props) {
//   return <li>I am a { props.brand }</li>;
// }

// function Garage() {
//   const cars = ['Ford', 'BMW', 'Audi'];
//   return (
//     <>
// 	    <h1>Who lives in my garage?</h1>
// 	    <ul>
//         {cars.map((car) => <Car brand={car} />)}
//       </ul>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);

/*
If you run this example in your create-react-app,
you will receive a warning that there is no "key" provided for the list items.
*/

// function Car(props) {
//   return <li>I am a {props.color }  { props.brand }</li>;
// }

// function Garage() {
//   const cars = [
//     {id: 1, brand: 'Ford', color: 'red'},
//     {id: 2, brand: 'BMW', color: 'white'},
//     {id: 3, brand: 'Audi', color: 'white'},
//     ];

//   return (
//     <>
// 	    <h1>Who lives in my garage?</h1>
// 	    <ul>
//         {cars.map((car) => <Car key={car.id} brand={car.brand} color={car.color}/>)}
//       </ul>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);

function MyForm(){
  return (
    <form>
      <label>Enter your name:
        <input type='text' />
      </label>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);