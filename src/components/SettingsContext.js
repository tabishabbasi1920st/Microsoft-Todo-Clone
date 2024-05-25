import { createContext, useContext, useEffect, useState } from "react";

export const SettingsContext = createContext(null);

const SettingsContextProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebar(true);
      } else {
        setSidebar(false);
      }
    };
    handleResize();
  }, []);

  const markTodoAsImportant = (todoId) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, important: true };
      }
      return todo;
    });

    setTodoList(updatedTodoList);
  };

  const unmarkTodoAsImportant = (todoId) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, important: false };
      }
      return todo;
    });

    setTodoList(updatedTodoList);
  };

  const markTodoAsCompleted = (todoId) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: true };
      }
      return todo;
    });

    setTodoList(updatedTodoList);
  };

  const unMarkTodoAsCompleted = (todoId) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: false };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  return (
    <SettingsContext.Provider
      value={{
        sidebar,
        setSidebar,
        todoList,
        setTodoList,
        markTodoAsImportant,
        unmarkTodoAsImportant,
        markTodoAsCompleted,
        unMarkTodoAsCompleted,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
