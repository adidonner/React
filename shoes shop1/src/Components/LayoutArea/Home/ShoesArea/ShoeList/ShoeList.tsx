import { useEffect, useState } from "react";
import ShoeModel from "../../../../Models/ShoeModel";
import ShoeCard from "../ShoesCard/ShoesCard";
import "./ShoeList.css";

function ShoeList(): JSX.Element {
    const [shoes, setShoes] = useState<ShoeModel[]>([]);
    
    useEffect(()=>{
        const x: ShoeModel[] = [
         
            {id:1, brandName: "Adidas", measure: 42, price: 100, image: "src\Components\Assets\Images\Adidas.jpeg"},
            {id:2, brandName: "NB", measure: 38, price: 99, image: "src\Components\Assets\Images\NB.jpeg"},
            {id:3, brandName: "nike", measure: 40, price: 110, image: "src\Components\Assets\Images\nike.jpeg"},
            {id:4, brandName: "Reebok", measure: 44, price: 120, image: "src\Components\Assets\Images\Reebok.jpeg"},
            {id:5, brandName: "Teva Vaot", measure: 41, price: 150, image: "src\Components\Assets\Images\Teva Naot.jpeg"},
        ];
        setShoes(x);
    }, []);

    return (
        <div className="ShoeList">
			רשימת מוצרים...
            <hr />
            {shoes.map((d) => (
                <ShoeCard key={d.id} shoe={d} />
        ))}
        </div>
    );
}

export default ShoeList;
