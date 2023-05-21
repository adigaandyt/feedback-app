import { createContext, useState } from "react";
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
      text: "frst Feedback from context",
      rating: 10,
    },
    {
      id: 2,
      text: "2nd Feedback from context",
      rating: 3,
    },
    {
      id: 3,
      text: "3d Feedback from context",
      rating: 5,
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
  };
  //Use state to set the feedback in edit mode
  //The state that holds the item so we have to send this to the form too
  const [feedbackEditMode, setFeedbackEditMode] = useState({
    item: {},
    edit: false,
  });

  //set item to be updated (edit mode)
  //This is the function that puts in edit mode, and above is the actual state
  const editFeedback = (item) => {
    setFeedbackEditMode({
      item,
      edit: true,
    });
  };

  //take in old id and new feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { item, ...updItem } : item))
    );
  };

  //pass values to children
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEditMode,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
