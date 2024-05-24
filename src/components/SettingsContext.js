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

  return (
    <SettingsContext.Provider
      value={{ sidebar, setSidebar, todoList, setTodoList }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
