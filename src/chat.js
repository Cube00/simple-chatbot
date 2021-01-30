import React, { useState, useReducer, useEffect } from "react";
import Stbs from "./Qareducer";

const object = {
  question: [],
  id: "",
  typing: true,
};
const Chat = () => {
  const [question, setQuestion] = useState("");
  const [state, dispatch] = useReducer(Stbs, object);
  const QuestionClick = (e) => {
    setQuestion(e.target.textContent);
    const newQuestion = {
      text: e.target.textContent,
      id: new Date().getTime().toString(),
    };
    dispatch({
      type: "QUESTION",
      payload: newQuestion,
    });
  };

  return (
    <>
      <div className="chat">
        <h2>Chat Bot</h2>
        <div className="messages">
          <div className="question">
            {state.question.map((eachQuestion) => {
              const { text, id } = eachQuestion;
              return (
                <div className="block" key={id}>
                  <span className="quest">{text}</span>
                  {text === "Who are you?" && (
                    <span className="answer">Hello, i`m Bot</span>
                  )}
                  {text === "What can you do?" && (
                    <span className="answer">I can answer your questions.</span>
                  )}
                  {text === "How old are you?" && (
                    <span className="answer">I am 20</span>
                  )}
                  {text === "What do you like?" && (
                    <span className="answer">I like you</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* {state.typing ? <div className="typing">Typing...</div> : ""} */}
      </div>
      <div className="questions">
        <li value="1" onClick={QuestionClick}>
          Who are you?
        </li>
        <li value="2" onClick={QuestionClick}>
          What can you do?
        </li>
        <li value="3" onClick={QuestionClick}>
          How old are you?
        </li>
        <li value="4" onClick={QuestionClick}>
          What do you like?
        </li>
      </div>
    </>
  );
};
export default Chat;
