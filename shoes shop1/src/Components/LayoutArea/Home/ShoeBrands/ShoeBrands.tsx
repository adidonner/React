import React from "react";
import "./ShoeBrands.css";

function ShoeBrands(): JSX.Element {
    const shoeBrands = [
        {id:1, model: "Nike" },
        {id:2, model: "Adidas" },
        {id:3, model: "Air Jordan"},
        {id:4, model: "Reebok"},
        {id:5, model: "New Balance"},
    ];
    return (
        <div className="shoeBrands Box">
            <ul>
            {shoeBrands.map((d)=>(
                <ul key={d.id}>{d.model}</ul>
            ))}
            </ul>
        </div>
    );
}

export default ShoeBrands;
