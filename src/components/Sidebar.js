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
  height: 100vh;
`;
