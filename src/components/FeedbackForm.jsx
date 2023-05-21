import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const { addFeedback, feedbackEditMode, updateFeedback } =
    useContext(FeedbackContext);

  //1st argument- callback func
  //2nd argument- array of dependencies
  //(if something in that array changes the effect runs)
  //if empty it will just run when comp loads
  //when we click edit, feedbackEditMode changes (false to true)
  //so that change fires off the effect
  useEffect(() => {
    //check if edit is set to true just in case
    if (feedbackEditMode.edit === true) {
      console.log(feedbackEditMode);
      setBtnDisabled(false); //Enable the submit button
      //get the item info that we selected to edit
      setText(feedbackEditMode.item.text);
      setRating(feedbackEditMode.item.rating);
    }
  }, [feedbackEditMode]);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const handleClick = () => {
    console.log("click");
  };
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const handleTextChange = (e) => {
    if (text === "" || text.length < 1) {
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
    if (text.trim().length > 1) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      if (feedbackEditMode.edit === true) {
        updateFeedback(feedbackEditMode.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
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
        <div className="input-group" placeholder="Review">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {/*if theres a message then show message in a div */}
        {message && <div className="message">{message} </div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
