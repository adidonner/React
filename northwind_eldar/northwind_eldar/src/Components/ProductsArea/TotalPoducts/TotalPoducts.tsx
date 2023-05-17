import { useEffect, useState } from "react";
import { productsStore } from "../../../Redux/ProductsState";
import "./TotalPoducts.css";

function TotalPoducts(): JSX.Element {
    
    const[count, setCount] = useState<number>(0);

    useEffect(()=>{
        setCount(productsStore.getState().products.length);

        // subscribe to get updates on state change
        const  unsubScribe = productsStore.subscribe(()=>{

            setCount(productsStore.getState().products.length);
            console.log("total products subscribed");
            
        });
        
        // return a callback that will run on component unmount.
        return ()=>{
            // un subscribe to stop getting updates
            unsubScribe();
            console.log("total products subscribed");
        };
    },[]);

    // if (count === 0) return null;

    return (
        <div className="TotalPoducts">
			<span>Total Products: {count}</span>
        </div>
    );
}

export default TotalPoducts;
