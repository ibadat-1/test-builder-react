import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTestDetails = createAsyncThunk(
  "test/fetchTestDetails",
  async () => {
    const response = await fetch("https://9eb20ed5035b782e.mokky.dev/test", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  }
);

export const saveTest = createAsyncThunk(
  "test/saveTest",
  async ({ testName, questions }) => {
    const response = await fetch("https://9eb20ed5035b782e.mokky.dev/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ testName, questions }),
    });
    const data = await response.json();
    return data;
  }
);
