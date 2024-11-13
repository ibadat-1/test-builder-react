import React, { useState } from "react";
import styled from "styled-components";
import Input from "./UI/Input";
import Button from "./UI/Button";

const AnswersList = ({ initialAnswers, onEditedAnswers }) => {
  const [answers, setAnswers] = useState(initialAnswers || []);
  const [answerVariant, setAnswerVariant] = useState("");

  const handleAddAnswer = () => {
    if (answerVariant && answers.length < 4) {
      const editedAnswers = [...answers, answerVariant];
      setAnswers(editedAnswers);
      setAnswerVariant("");
      onEditedAnswers(editedAnswers);
    }
  };

  const handleDeleteAnswer = (index) => {
    const editedAnswers = answers.filter((_, i) => i !== index);
    setAnswers(editedAnswers);
    onEditedAnswers(editedAnswers);
  };

  const handleEditAnswer = (index) => {
    const newAnswerVariant = prompt("izmenite variant", answers[index]);

    if (newAnswerVariant) {
      const editedAnswers = answers.map((answer, i) => {
        return i === index ? newAnswerVariant : answer;
      });
      setAnswers(editedAnswers);
      onEditedAnswers(editedAnswers);
    }
  };
  return (
    <StyleMainDiv>
      {answers.map((answer, index) => {
        return (
          <div key={index}>
            <Input type="checkbox" />
            <p>{answer}</p>
            <Button onClick={() => handleEditAnswer(index)}>edit</Button>
            <Button onClick={() => handleDeleteAnswer(index)}>delete</Button>
          </div>
        );
      })}
      {answers.length < 4 && (
        <>
          <Input
            type="text"
            placeholder={"Введите вариант"}
            value={answerVariant}
            onChange={(e) => setAnswerVariant(e.target.value)}
          />
          <Button onClick={handleAddAnswer}>Добавить</Button>
        </>
      )}
    </StyleMainDiv>
  );
};

export default AnswersList;

const StyleMainDiv = styled.div`
  display: flexbox;
`
