import styled from "styled-components";
import SidebarPanel from "./SidebarPanel";
import ListOptionsSidebar from "./ListOptionsSidebar";
import SuggestionSidebar from "./SuggestionSidebar";
import TodoInfoSidebar from "./TodoInfoSidebar";

export default function Sidebar({ children }) {
  return (
    <MainContainer>
      <SidebarPanel />
      <Main>{children}</Main>
      <ListOptionsSidebar />
      <SuggestionSidebar />
      <TodoInfoSidebar />
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
