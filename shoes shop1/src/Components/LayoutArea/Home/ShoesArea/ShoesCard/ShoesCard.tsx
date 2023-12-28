import ShoeModel from "../../../../Models/ShoeModel";
import "./ShoesCard.css";

interface ShoeCardProps {
    shoe: ShoeModel;
}

function ShoeCard(props: ShoeCardProps): JSX.Element {
 
    return (
        <div className="ShoeCard Box">
			<div>
                {props.shoe.brandName} <br />
                Measure: {props.shoe.measure} <br />
                Price: ${props.shoe.price} <br />
                <img src="{props.shoe.image}" />
            </div>
        </div>
    );
}

export default ShoeCard;
