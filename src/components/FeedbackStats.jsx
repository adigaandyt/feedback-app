import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  //rating Average
  let average =
    feedback.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rating;
    }, 0) / feedback.length;

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      {/*if is null show 0 else show average */}
      <h4>Average: {isNaN(average) ? 0 : average.toFixed(1)} </h4>
    </div>
  );
}

export default FeedbackStats;
