import styled from "styled-components";
import { useContext } from "react";
import { SettingContext } from "../components/SettingsContext";

const ListOptionsSidebar = () => {
  const { listOptionsSidebar, setListOptionsSidebar } =
    useContext(SettingContext);

  return <MainContainer>ListOptionsSidebar</MainContainer>;
};

export default ListOptionsSidebar;

const MainContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  overflow-y: auto;
  width: ${(props) => (props.isOpen ? "320px" : "0px")};
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.isOpen ? "100%" : "0px")};
    position: absolute;
    right: 0px;
    top: 0px;
  }
  transition: width 0.2s ease-in-out;
`;
