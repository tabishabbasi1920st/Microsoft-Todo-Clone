import styled from "styled-components";
import { FaRegCircle } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { SettingsContext } from "./SettingsContext";
import { useContext } from "react";

// stars.
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { GoCheckCircle } from "react-icons/go";

const TodoItem = ({ todo }) => {
  const { id, text, createdAt, important, completed } = todo;

  const {
    markTodoAsImportant,
    unmarkTodoAsImportant,
    markTodoAsCompleted,
    unMarkTodoAsCompleted,
    todoInfoSidebar,
    setTodoInfoSidebar,
  } = useContext(SettingsContext);

  return (
    <MainContainer>
      <div style={{ display: "flex", height: "100%" }}>
        <Button
          onClick={() =>
            completed ? unMarkTodoAsCompleted(id) : markTodoAsCompleted(id)
          }
        >
          {completed ? (
            <GoCheckCircle size={20} color="#fff" />
          ) : (
            <FaRegCircle size={20} color="#fff" />
          )}
        </Button>
      </div>

      <TodoText onClick={() => setTodoInfoSidebar(true)}>{text}</TodoText>

      <div style={{ display: "flex", height: "100%" }}>
        <StarButton
          onClick={() =>
            important ? unmarkTodoAsImportant(id) : markTodoAsImportant(id)
          }
        >
          {important ? (
            <IoIosStar fontSize={20} color="#fff" />
          ) : (
            <IoIosStarOutline fontSize={20} color="#fff" />
          )}
        </StarButton>
        <MoreTodoButton>
          <IoMdMore fontSize={20} color="#fff" />
        </MoreTodoButton>
      </div>
    </MainContainer>
  );
};

export default TodoItem;

const MainContainer = styled.li`
  min-height: 50px;
  width: 100%;
  background: rgba(41, 41, 41, 0.4);
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  padding-left: 5px;
`;

const Button = styled.button`
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;

const StarButton = styled.button`
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;

const MoreTodoButton = styled.button`
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;

const TodoText = styled.p`
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  flex-grow: 1;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
`;
