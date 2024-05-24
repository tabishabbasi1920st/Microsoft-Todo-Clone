import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { useState } from "react";
import { VscSend } from "react-icons/vsc";
import { v4 as uuidv4 } from "uuid";
import { SettingsContext } from "../components/SettingsContext";
import { useContext } from "react";

const NewTodoInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { todoList, setTodoList } = useContext(SettingsContext);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const getAppropIcon = () => {
    if (isFocused || inputValue.length > 0) {
      return <FaRegCircle fontSize={20} color="white" />;
    }

    if (!isFocused) {
      return <FaPlus fontSize={20} color="white" />;
    }
  };

  const getAppropPlaceholder = () => {
    if (isFocused) {
      return "Try typing 'Pay utilities bill by Friday'";
    }
    return "Add a task";
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.length > 0) {
      addNewTodo();
    }
  };

  const addNewTodo = () => {
    const newTodo = {
      id: uuidv4(),
      text: inputValue,
      createdAt: new Date(),
    };

    setTodoList((prevState) => [...prevState, newTodo]);
  };

  console.log(todoList);

  return (
    <MainContainer>
      {getAppropIcon()}
      <CustomInput
        type="text"
        placeholder={getAppropPlaceholder()}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {inputValue.length > 0 && (
        <AddButton onClick={addNewTodo}>
          <VscSend color="white" />
        </AddButton>
      )}
    </MainContainer>
  );
};

export default NewTodoInput;

const MainContainer = styled.div`
  height: 50px;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
  background: rgba(41, 41, 41, 0.4);
  align-items: center;
  padding-left: 10px;
`;

const CustomInput = styled.input`
  height: 100%;
  border: none;
  flex-grow: 1;
  padding: 10px;
  font-size: 18px;
  background-color: transparent;
  font-weight: 400;
  outline: none;
  color: #fff;

  &::placeholder {
    color: #fff;
  }
`;

const AddButton = styled.button`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40px;
  background-color: transparent;
  border: none;
  padding-right: 10px;
  outline: none;
`;
