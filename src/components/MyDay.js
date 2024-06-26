import styled from "styled-components";
import { TfiLightBulb } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosMore } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { SettingsContext } from "./SettingsContext";
import NewTodoInput from "./NewTodoInput";
import TodoItem from "./TodoItem";

const pageConstants = {
  myDay: "MY_DAY",
  important: "IMPORTANT",
  planned: "PLANNED",
  all: "ALL",
  completed: "COMPLETED",
  assignedToMe: "ASSIGNED_TO_ME",
  tasks: "TASKS",
};

const MyDay = () => {
  const [configObj, setConfigObj] = useState({});

  const { setSidebar, todoList, setListOptionsSidebar, setSuggestionsSidebar } =
    useContext(SettingsContext);

  useEffect(() => {
    const pageConfigList = localStorage.getItem("pageConfigList");

    if (pageConfigList !== null) {
      const myDayConfigObj = JSON.parse(pageConfigList).filter(
        (eachObj) => eachObj.pageId === pageConstants.myDay
      )[0];

      setConfigObj(myDayConfigObj);
    }
  }, []);

  const getFormattedDate = (date) => {
    const options = { weekday: "long", day: "2-digit", month: "short" };
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      date
    );

    return formattedDate;
  };

  const currentDate = new Date();
  const formattedDate = getFormattedDate(currentDate);

  const { pageId, bgImage, sorted } = configObj;

  return (
    <MainContainer bgImage={bgImage}>
      <Button onClick={() => setSidebar(true)}>
        <GiHamburgerMenu />
      </Button>

      <TopSection>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <IoSunnyOutline color="white" fontSize={30} />
          <div>
            <h1
              style={{ color: "white", fontWeight: "bold", fontSize: "33px" }}
            >
              My Day
            </h1>
            <p style={{ color: "white" }}>{formattedDate}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <CustomButton
            onClick={() => setSuggestionsSidebar((prevState) => !prevState)}
          >
            <TfiLightBulb />
          </CustomButton>
          <CustomButton
            onClick={() => setListOptionsSidebar((prevState) => !prevState)}
          >
            <IoIosMore />
          </CustomButton>
        </div>
      </TopSection>
      <TodoContainer>
        {todoList.map((eachTodo) => (
          <TodoItem todo={eachTodo} key={eachTodo.id} />
        ))}
      </TodoContainer>
      <NewTodoInput />
    </MainContainer>
  );
};

export default MyDay;

const MainContainer = styled.div`
  background-color: #1c1c1c;
  height: 100%;
  width: 100%;
  padding: 10px 10px 10px 10px;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
  background-image: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.section`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
`;

const CustomButton = styled.button`
  background-color: rgba(41, 41, 41, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  color: #fff;
  height: 35px;
  width: 35px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
  align-self: flex-start;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const TodoContainer = styled.ul`
  flex-grow: 1;
  margin-top: 20px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  padding-bottom: 10px;
  margin-bottom: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
