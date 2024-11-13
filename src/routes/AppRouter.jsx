import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import CreateTestsPage from "../pages/CreateTestsPage";
import TestDetails from "../components/TestDetails";

const AppRouter = () => {
  const onLogin = (path) => {
    window.location.href = path;
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage onLogin={onLogin} />} />
      <Route path="/create-test" element={<CreateTestsPage />} />
      <Route path="/test-details" element={<TestDetails />} />
    </Routes>
  );
};

export default AppRouter;
