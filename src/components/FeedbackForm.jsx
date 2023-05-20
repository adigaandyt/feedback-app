import { useState } from "react";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>Enter Rating</h2>
        <div className="input-group" placeholder="Review">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
