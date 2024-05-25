import React from "react";
import styled from "styled-components";
import { SettingsContext } from "./SettingsContext";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";

const SuggestionSidebar = () => {
  const { suggestionsSidebar, setSuggestionsSidebar } =
    useContext(SettingsContext);

  return (
    <MainContainer
      onClick={(e) =>
        e.currentTarget.id === "outer" && setSuggestionsSidebar(false)
      }
      isOpen={suggestionsSidebar}
      id="outer"
    >
      <MainSection>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "#fff", fontWeight: 500, fontSize: "30px" }}>
            Suggestions
          </h1>
          <Button
            onClick={() => {
              setSuggestionsSidebar(false);
            }}
          >
            <IoClose color="#939393" />
          </Button>
        </div>
      </MainSection>
    </MainContainer>
  );
};

export default SuggestionSidebar;

const MainContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  overflow-y: auto;
  width: ${(props) => (props.isOpen ? "320px" : "0px")};
  @media screen and (max-width: 992px) {
    width: ${(props) => (props.isOpen ? "100%" : "0px")};
    position: absolute;
    top: 0px;
    right: 0px;
  }
  transition: width 0.2s ease-in-out;
  display: flex;
  justify-content: flex-end;
`;

const MainSection = styled.section`
  background-color: rgba(41, 41, 41, 0.94);
  height: 100vh;
  width: 320px;
  max-width: 320px;
  overflow-x: hidden;
  z-index: 12234;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Button = styled.button`
  height: 30px;
  width: 30px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  color: #fff;

  &:hover {
    background-color: #232323;
    border-radius: 5px;
  }
`;
