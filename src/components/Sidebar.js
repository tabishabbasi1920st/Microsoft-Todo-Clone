import styled from "styled-components";
import SidebarPanel from "./SidebarPanel";

export default function Sidebar({ children }) {
  return (
    <MainContainer>
      <SidebarPanel />
      <Main>{children}</Main>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #232323;
  display: flex;
`;

const Main = styled.main`
  flex-grow: 1;
  border-top-left-radius: ${(props) => (props.isOpen ? "10px" : "0px")};
  border-bottom-left-radius: ${(props) => (props.isOpen ? "10px" : "0px")};
  height: 100vh;
`;
