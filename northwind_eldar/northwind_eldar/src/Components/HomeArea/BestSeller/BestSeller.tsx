import { useState } from "react";
import "./BestSeller.css";

function BestSeller(): JSX.Element {

    const nameArray = useState<string>("xyz");
    const name = nameArray[0]; // this is the state property
    const setName = nameArray[1]; // this is a function for changing the state

    const [itemsSold, setItemsSold] = useState<number>(150);

    function display() {
        // demo for getting the best seller from backend
        let arr = ["Exotic Liquids", "Apple", "Coffee", "Pie"];
        let productName = arr[Math.floor(Math.random()*arr.length)];
        console.log("change of state - react will render the component again");
        setName(productName);
        setItemsSold(Math.floor(Math.random() * 101));
        
    }

    return (
        <div className="BestSeller Box">
            <button onClick={display}>Display Best Seller</button>
            <span> Name: {name}, Items sold: {itemsSold} </span>
        </div>
    );
}

export default BestSeller;
