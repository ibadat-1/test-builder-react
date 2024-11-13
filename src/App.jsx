import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import store from "./redux/store";

export function App() {
  const [currentPath, setCurrentPath] = useState("/");

  const handleLogin = (path) => {
    setCurrentPath(path);
  };
  return (
    <Provider store={store}>
      <Router>
        <AppRouter onLogin={handleLogin}/>
        {currentPath === '/create-test' && <Navigate to="/create-test" replace />}
        {currentPath === '/take-test' && <Navigate to="/take-test" replace />}
      </Router>
    </Provider>
  );
}
