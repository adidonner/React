import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShoeModel from "../../../../Models/ShoeModel";
import "./ShoeDetails.css";

function ShoeDetails(): JSX.Element {

    const params = useParams();
    const prodId = params.prodId;

    const [shoe, setShoe] = useState<ShoeModel>();

// useEffect(() => {

// }, []);

    return (
        <div className="ShoeDetails">
			{shoe && (
                <>
                    <h3>brandName: {shoe.brandName}</h3>
                    <h3>Measure: {shoe.measure}</h3>
                    <h3>Price: {shoe.price}</h3>
                    <img src="{shoe.image}"></img>
                </>
            )}
        </div>
    );
}

export default ShoeDetails;
