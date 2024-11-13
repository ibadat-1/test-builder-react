import { createSlice } from "@reduxjs/toolkit";
import { fetchTestDetails, saveTest } from "../thunks/CreateAsyncThunk";

const testSlice = createSlice({
  name: "test",
  initialState: {
    test: {
      testName: "",
      questions: [],
    },
    status: "done",
    error: null,
  },
  reducers: {
    setTestName: (state, action) => {
      state.testName = action.payload;
    },
    addQuestion(state, action) {
      const newQuestion = {
        text: action.payload.text,
        answers: action.payload.answers || [],
      };
      state.test.questions.push(newQuestion);
    },
    deleteQuestion(state, action) {
      const index = action.payload;
      state.test.questions.splice(index, 1);
    },
    editQuestionAnswers(state, sction) {
      const { questionIndex, answers } = action.payload;
      state.test.questions[questionIndex].answers = answers;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTestDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTestDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.test.testName =
          action.payload.testName || localStorage.getItem("testName") || "";
        state.test.questions = action.payload.questions || [];
      })
      .addCase(fetchTestDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(saveTest.fulfilled, (state) => {
        console.log("+");
      })
      .addCase(saveTest.rejected, (state, action) => {
        state.error = action.error.message;
        console.log("-");
      });
  },
});

export const { setTestName, addQuestion, deleteQuestion, editQuestionAnswers } =
  testSlice.actions;
export default testSlice.reducer;
