import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Subheader from "./components/Subheader/Subheader";
import Date from "./components/Date/Date";
import Location from "./components/Location/Location";
import Timing from "./components/Timing/Timing";
import Dress from "./components/Dress/Dress";
import Anketa from "./components/Anketa/Anketa";
import WeddingTimer from "./components/Timer/Timer";
import Letter from "./components/Letter/Letter";
import { Notifications } from "@mantine/notifications";
import "./App.css";

function App() {
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    setShowLetter(true);
  }, []);

  const handleCloseLetter = () => {
    setShowLetter(false);
  };

  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showLetter && <Letter toggleOffLetter={handleCloseLetter} />}
                <Header />
                <Subheader />
                <Date />
                <Location />
                <Timing />
                <Dress />
                <Notifications />
                <Anketa />
                <WeddingTimer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
