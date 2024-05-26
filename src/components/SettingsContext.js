import { createContext, useContext, useEffect, useState } from "react";

export const SettingsContext = createContext(null);

const SettingsContextProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [listOptionsSidebar, setListOptionsSidebar] = useState(false);
  const [suggestionsSidebar, setSuggestionsSidebar] = useState(false);
  const [todoInfoSidebar, setTodoInfoSidebar] = useState(false);
  const [todoList, setTodoList] = useState([
    {
      id: "7cee0b0a-b5c4-49cf-a72f-19033843bb86",
      text: "hello",
      createdAt: "Sun May 26 2024 11:25:19 GMT+0530 (India Standard Time)",
      important: false,
      completed: false,
    },

    {
      id: "f3b7f1c1-1dd0-4867-89e3-c5b63fa70f0f",
      text: "hi",
      createdAt: "Sun May 26 2024 11:25:20 GMT+0530 (India Standard Time)",
      important: true,
      completed: true,
    },

    {
      id: "b0f7d343-7bb1-46ac-915e-8bd6123914f5",
      text: "how r u",
      createdAt: "Sun May 26 2024 11:25:22 GMT+0530 (India Standard Time)",
      important: true,
      completed: false,
    },

    {
      id: "59cd430c-e2b4-4503-a699-1aa557d23b3e",
      text: "i am fine",
      createdAt: "Sun May 26 2024 11:25:29 GMT+0530 (India Standard Time)",
      important: false,
      completed: false,
    },

    {
      id: "ed87386e-3440-41d6-9a20-578db635db36",
      text: "yt",
      createdAt: "Sun May 26 2024 11:25:35 GMT+0530 (India Standard Time)",
      important: true,
    },
  ]);

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
        listOptionsSidebar,
        setListOptionsSidebar,
        suggestionsSidebar,
        setSuggestionsSidebar,
        todoInfoSidebar,
        setTodoInfoSidebar,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
