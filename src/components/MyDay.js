import styled from "styled-components";
import { TfiLightBulb } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosMore } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";

import { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

const MyDay = () => {
  const { sidebar, setSidebar } = useContext(SettingsContext);

  const getFormattedDate = (date) => {
    const options = { weekday: "long", day: "2-digit", month: "short" };
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      date
    );

    return formattedDate;
  };

  const currentDate = new Date();
  const formattedDate = getFormattedDate(currentDate);

  return (
    <MainContainer>
      {!sidebar && (
        <Button onClick={() => setSidebar(true)}>
          <GiHamburgerMenu />
        </Button>
      )}
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
          <CustomButton>
            <TfiLightBulb />
          </CustomButton>
          <CustomButton>
            <IoIosMore />
          </CustomButton>
        </div>
      </TopSection>
    </MainContainer>
  );
};

export default MyDay;

const MainContainer = styled.div`
  background-color: #1c1c1c;
  height: 100%;
  width: 100%;
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
  background-image: url("https://res.cloudinary.com/dctfbwk0m/image/upload/v1716527660/green-field-tree-blue-skygreat-as-backgroundweb-banner-generative-ai-min_e5anfu.jpg");
  background-size: cover;
`;

const TopSection = styled.section`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
`;

const CustomButton = styled.button`
  background-color: #232323;
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
`;
