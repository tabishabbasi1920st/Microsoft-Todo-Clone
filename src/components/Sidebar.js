import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

// context..
import { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

// sidebar navigation item images.
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { IoBarcodeSharp } from "react-icons/io5";
import { GoInfinity } from "react-icons/go";
import { GoCheckCircle } from "react-icons/go";

import { AiOutlineUser } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

import { GoHome } from "react-icons/go";

const routes = [
  {
    path: "/",
    name: "My Day",
    icon: <IoSunnyOutline fontSize={30} />,
  },
  {
    path: "/important",
    name: "Important",
    icon: <IoIosStarOutline fontSize={30} />,
  },
  {
    path: "/planned",
    name: "Planned",
    icon: <IoBarcodeSharp fontSize={30} />,
  },
  {
    path: "/all",
    name: "All",
    icon: <GoInfinity fontSize={30} />,
  },
  {
    path: "/completed",
    name: "Completed",
    icon: <GoCheckCircle fontSize={30} />,
  },
  {
    path: "/assigned-to-me",
    name: "Assigned to me",
    icon: <AiOutlineUser fontSize={30} />,
  },
  {
    path: "/tasks",
    name: "Tasks",
    icon: <GoHome fontSize={30} />,
  },
];

export default function Sidebar({ children }) {
  const { sidebar, setSidebar } = useContext(SettingsContext);

  const renderProfile = () => {
    return (
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "green",
            minHeight: "55px",
            minWidth: "55px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#fff", fontWeight: 500 }}>TA</p>
        </div>
        <div>
          <p style={{ color: "#fff", fontWeight: 600, fontSize: "20px" }}>
            Tabish abbasi
          </p>
          <p style={{ color: "#fff", fontSize: "16px" }}>
            tabishabbasi1920st@gmail.com
          </p>
        </div>
      </div>
    );
  };

  const renderSearchBar = () => {
    return (
      <SearchContainer>
        <CustomInput type="search" placeholder="Search" />
        <CiSearch color="white" fontSize={30} />
      </SearchContainer>
    );
  };

  return (
    <MainContainer className="sidebar-container">
      <SidebarContainer className="sidebar" isOpen={sidebar}>
        <Button onClick={() => setSidebar(false)}>
          <GiHamburgerMenu />
        </Button>
        <Section style={{ marginLeft: 15 }}>
          {renderProfile()}
          {renderSearchBar()}
        </Section>

        <Section>
          {routes.map((eachRoute) => (
            <CustomNavLink
              to={eachRoute.path}
              key={eachRoute.name}
              activeClassName="active"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setSidebar(false);
                }
              }}
            >
              <div className="border-container"></div>
              {eachRoute.icon}
              <span style={{ fontSize: "16px", fontWeight: 400 }}>
                {eachRoute.name}
              </span>
            </CustomNavLink>
          ))}
        </Section>
      </SidebarContainer>
      <Main isOpen={sidebar}>{children}</Main>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #232323;
  display: flex;
`;

const SidebarContainer = styled.div`
  background-color: rgba(41, 41, 41, 0.97);
  height: 100vh;
  overflow-y: auto;

  display: ${(props) => (props.isOpen ? "block" : "none")};
  transition: width 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 15px 20px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 40px;
  margin-left: auto;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #323232;
  padding-right: 5px;
  border-bottom: 1px solid white;
  margin-bottom: 15px;
`;

const CustomInput = styled.input`
  flex-grow: 1;
  height: 100%;
  background-color: transparent;
  border: none;
  padding: 10px;
  font-size: 15px;
  outline: none;
  color: #fff;

  &::placeholder {
    color: #fff;
  }
`;

const Main = styled.main`
  background-color: #fff;
  flex-grow: 1;
  border-top-left-radius: ${(props) => (props.isOpen ? "10px" : "0px")};
  border-bottom-left-radius: ${(props) => (props.isOpen ? "10px" : "0px")};

  overflow: hidden;
`;

const CustomNavLink = styled(NavLink)`
  display: flex;
  padding: 5px 5px 5px 0px;
  gap: 10px;
  align-items: center;
  color: #fff;
  text-decoration: none;
  height: 35px;

  div {
    height: 60%;
    width: 3px;
  }

  &.${(props) => props.activeClassName} {
    background-color: #333;
    border-radius: 3px;

    div {
      border-left: 3px solid #76b9ed;
      border-radius: 5px;
    }
  }
  &:hover {
    background-color: #333;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 5px;
  padding-right: 5px;
`;
