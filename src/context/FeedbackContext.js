import { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

//Just like when we made compnents that take in children
//we put in children here because we will be wrapping with thos feebackprovider
//anything we want to pass through enters the value as an object

//Create a context, then use it with useContext
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Feedback from context",
      rating: 10,
    },
  ]);
  //feedback, is shorthand for feedback: feedback

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?0")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(...feedback);
  };
  //Use state to set the feedback in edit mode
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //set item to be updated (edit mode)
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //pass values to children
  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
