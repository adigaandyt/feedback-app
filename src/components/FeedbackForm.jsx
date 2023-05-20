import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const { addFeedback } = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const handleClick = () => {
    console.log("click");
  };
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const handleTextChange = (e) => {
    if (text === "" || text.length < 10) {
      setBtnDisabled(true);
      setMessage("Enter 10 words to submit");
    } else {
      setBtnDisabled(false);
      setMessage("");
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      addFeedback(newFeedback);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Enter Rating</h2>
        <RatingSelect
          select={(rating) => setRating(rating)}
          selected={rating}
        />
        <div className='input-group' placeholder='Review'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' version='primary' isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {/*if theres a message then show message in a div */}
        {message && <div className='message'>{message} </div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
