import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./db";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

//Returning JSX, Javascript XML - syntactic sugar
//( syntax within a programming language that is
//designed to make things easier to read or to express.)
//Syntax extension that allows to put html directly into Javascript

//Everything in the JSX return needs to be wrapped in a single fragment (one parent element)

//Add context so we dont have to do prop drilling
//so we dont have to pass props at every level
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
