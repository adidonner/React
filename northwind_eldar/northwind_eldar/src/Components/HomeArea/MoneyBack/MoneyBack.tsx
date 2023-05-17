import { log } from "console";
import { useEffect, useState } from "react";
import "./MoneyBack.css";

function MoneyBack(): JSX.Element {

    const [money, setMoney] = useState<number>(0);



    useEffect(() => {
        console.log("  useEffect starts");
        
        setTimeout(() => {
            console.log("    changing state starts");
            
            setMoney(Math.floor(Math.random() * 51) + 5);
        }, 3000);
    }, []);


    console.log("rendering MoneyBack");
    
    return (
        <div className="MoneyBack Box">
            <span>Money Back: {money}</span>
        </div>
    );
}

export default MoneyBack;
