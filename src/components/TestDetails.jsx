import React, { useEffect, useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuestion,
  deleteQuestion,
  editQuestionAnswers,
  setTestName,
} from "../redux/slices/TestSlice";
import { fetchTestDetails, saveTest } from "../redux/thunks/CreateAsyncThunk";
import AnswersList from "./AnswersList";

const TestDetails = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const { test, status, error } = useSelector((state) => state.test);
  const dispatch = useDispatch();

  const handleNewQuestion = (e) => {
    setNewQuestion(e.target.value);
  };

  useEffect(() => {
    const savedTestName = localStorage.getItem("testName");
    dispatch(setTestName(savedTestName || ""));
    dispatch(fetchTestDetails());
  }, [dispatch]);

  const handleAddQuestions = () => {
    dispatch(addQuestion({ text: newQuestion, answers: [] }));
    setNewQuestion("");
    // console.log(newQuestion);
  };

  const handleEditAnswers = (questionIndex, editedAnswers) => {
    dispatch(editQuestionAnswers({ questionIndex, answers: editedAnswers }));
  };

  const handleDeleteQuestion = (questionIndex) => {
    dispatch(deleteQuestion(questionIndex));
  };

  if (status === "loading") return console.log("zagruzka");
  if (error) return console.log("oshibka");

  return (
    <StyleMainDiv>
      <StyleTagH1>{test.testName}</StyleTagH1>

      <StyleSecondDiv>
        <Input
          type="text"
          placeholder={"Введите вопрос"}
          value={newQuestion}
          onChange={handleNewQuestion}
          style={{ width: "1200px" }}
        />

        <Button
          onClick={handleAddQuestions}
          variant={"blue"}
          style={{ width: "1200px", height: "40px" }}
        >
          Добавить вопрос
        </Button>
      </StyleSecondDiv>
      <Button
        onClick={() => dispatch(saveTest(test))}
        style={{ marginLeft: "1168px", width: "200px" }}
      >
        Сохранить
      </Button>

      <StyleQuestion>
        {test.questions.map((question, index) => (
          <div key={index}>
            <p>{question.text}</p>
            <Button
              onClick={() => handleDeleteQuestion(questionIndex)}
              style={{
                background: "none",
                color: "grey",
                width: "10px",
                height: "10px",
              }}
            >
              X
            </Button>
            <AnswersList
              initialAnswers={question.answers}
              onEditAnswers={(editedAnswers) =>
                handleEditAnswers({
                  questionIndex: index,
                  answers: editedAnswers,
                })
              }
            />
          </div>
        ))}
      </StyleQuestion>
    </StyleMainDiv>
  );
};

export default TestDetails;

const StyleTagH1 = styled.h1`
  font-size: 45px;
  font-weight: 500;
  margin-left: 170px;
  margin-bottom: -10px;
`;

const StyleMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const StyleSecondDiv = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  flex-direction: column;
  gap: 7px;
`;

const StyleQuestion = styled.div`
  display: flex;
  /* box-shadow: -6px 14px 55px 23px rgba(0, 0, 0, 0.1); */
  border: 0.5px solid gray;
  width: 1200px;
  height: 120px;
  margin-left: 168px;
`;
