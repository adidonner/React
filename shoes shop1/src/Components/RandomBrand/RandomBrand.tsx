import { useState } from "react";
import "./ShoeBrands.css";

function ShoeBrands(): JSX.Element {

    const nameArrey = useState<string>("");
    const name = nameArrey[0];
    const setName = nameArrey[1];

    function display() {
        let  arr = ["Nike", "Adidas", "Air Jordan", "Reebok", "New Balance"];
        let productName = arr[Math.floor(Math.random()*arr.length)];
        setName(productName);
    } 
    
  
    return (
        <div className="ShoeBrands Box">
			<h2> מותגי הנעליים שלנו: </h2>
            <button onClick={display}>Display Shoe Brand</button>
            <span>Name: {name}</span>
        </div>
    );
}

export default ShoeBrands;
