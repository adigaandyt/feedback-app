import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./db";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

//Returning JSX, Javascript XML - syntactic sugar
//( syntax within a programming language that is
//designed to make things easier to read or to express.)
//Syntax extension that allows to put html directly into Javascript

//Everything in the JSX return needs to be wrapped in a single fragment (one parent element)
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
