// Pada App.js

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Quiz from "../components/Quiz";
import Result from "../components/Result";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser).username);
    }
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              user ? <Navigate to="/quiz" /> : <SignIn setUser={setUser} />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route
            path="/quiz"
            element={user ? <Quiz user={user} /> : <Navigate to="/" />}
          />
          <Route
            path="/result"
            element={user ? <Result /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
