import React from 'react';
import ReactDOM from 'react-dom/client';
// import Car from './Car';

// const myElement = (
//     <ul>
//       <li>Apples</li>
//       <li>Bananas</li>
//       <li>Cherries</li>
//     </ul>
//   );

//   const myElement = (
//     <>
//       <h1>I am a Header.</h1>
//       <h1>I am a Header too.</h1>
//       <input type="text" />
//     </>
//   );
  
  
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

// function Car() {
//     return <h2>Hi, I am a Car!</h2>
// }

// const root = ReactDOM.createRoot(document.
// getElementById('root'));
// root.render(<Car />);

// function Car(props) {
//     return <h2>I am a {props.color} Car!</h2>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car color="red"/>);

// function Car() {
//     return <h2> I am a Car!</h2>
// }

// function Garage() {
//     return (
//         <>
//             <h1> Who lives in my Garage? </h1>
//             <Car />
//         </>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);

// class Car extends React.Component {
    
//     constructor(props) {
//         super(props);
//         this.state = {
//             brand: "Ford",
//             model: "Mustang",
//             color: "red",
//             year: 1964
//         };
//     }
//     changeColor = () => {
//         this.setState({color: "blue"})
//     }
//     changeYear = () => {
//         this.setState({year: 1965})
//     }
//     render(){
//         return(
//             <div>
//                 <h1>My {this.state.brand}</h1>
//                 <p>
//                     It is a {this.state.color} {this.state.model} from {this.state.year}
//                     .
//                 </p>
//                 <button
//                 type='button'
//                 onClick={this.changeColor}
//                 >Change Color</button>
//                 <p>
//                 <button
//                 type='button'
//                 onClick={this.changeYear}
//                 >Change Year</button>
//                 </p>
//             </div>
//         )
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);

// class Header extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoritecolor: "red"};
//     }
//     static getDerivedStateFromProps(props, state) {
//       return {favoritecolor: props.favcol };
//     }
//     render() {
//       return (
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       );
//     }
//   }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Header favcol="orange"/>);

// class Header extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoritecolor: "red"};
//     }
//     componentDidMount() {
//       setTimeout(() => {
//         this.setState({favoritecolor: "yellow"})
//       }, 3000)
//     }
//     render() {
//       return (
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       );
//     }
//   }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Header />);


function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  const over = () =>{
    <h2> Go on</h2>
    // alert("Do it!")
  }
  
  return ( 
    <div>
    <button onMouseOut={shoot} onMouseOver={over}>Take the shot</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />)