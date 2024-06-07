import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  const [user, setUser] = useState(null);

  // Function to update user information
  const onUserUpdate = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<RegistrationPage onUserUpdate={onUserUpdate} />}
        />
        <Route path="/profile" element={<ProfilePage user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
