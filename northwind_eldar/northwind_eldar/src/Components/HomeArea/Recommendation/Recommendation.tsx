import { SyntheticEvent } from "react";
import notificationService from "../../../Services/NotificationService";
import "./Recommendation.css";

function Recommendation(): JSX.Element {
  function recommend(e: SyntheticEvent) {
    notificationService.success("Irish Cream");
    console.log(e);
  }

  return (
    <div className="Recommendation Box">
      {/*event binding*/}
      <button onClick={recommend}>Recommend</button>
    </div>
  );
}

export default Recommendation;
