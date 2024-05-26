import styled from "styled-components";
import { useContext, useState } from "react";
import { SettingsContext } from "./SettingsContext";
import { IoClose } from "react-icons/io5";
import { RiArrowUpDownLine } from "react-icons/ri";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FiPrinter } from "react-icons/fi";
import { FaRegFilePdf } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";

const sortOptionList = [
  {
    id: "IMPORTANCE",
    name: "Importance",
    icon: <IoIosStarOutline fontSize={20} color={"#939393"} />,
  },
  {
    id: "DUE_DATE",
    name: "Due date",
    icon: <SlCalender fontSize={20} color={"#939393"} />,
  },
  {
    id: "ALPHABETICALLY",
    name: "Alphabetically",
    icon: <RiArrowUpDownLine fontSize={20} color={"#939393"} />,
  },
  {
    id: "CREATION_DATE",
    name: "Creation date",
    icon: <CiCalendarDate fontSize={24} color={"#939393"} />,
  },
];

const colorsAndImages = [
  {
    id: "WALLPAPER_TREE_SUN",
    imageUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1716528020/pathway-middle-green-leafed-trees-with-sun-shining-through-branches-min_wwvtcm.jpg",
    icon: "https://res.cloudinary.com/dctfbwk0m/image/upload/v1716642836/Screenshot_2024-05-25_183429-min_btgxm4.png",
  },
  {
    id: "WALLPAPER_FALLEN_LEAVES",
    imageUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1716527979/dry-autumn-leaves-nature-min_dslzyb.jpg",
    icon: "https://res.cloudinary.com/dctfbwk0m/image/upload/v1716642835/Screenshot_2024-05-25_183502-min_1_bgrb2v.png",
  },
  {
    id: "WALLPAPER_GREEN_LEAVES",
    imageUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1716527707/seamless-pattern-with-green-leaves-plants-min_oo5pht.jpg",
    icon: "https://res.cloudinary.com/dctfbwk0m/image/upload/v1716642834/Screenshot_2024-05-25_183717-min_rkks6e.png",
  },
  {
    id: "WALLPAPER_HOME",
    imageUrl:
      "https://res.cloudinary.com/dctfbwk0m/image/upload/v1716632891/charming-yellow-house-with-wooden-windows-green-grassy-garden-min_sbjumb.jpg",
    icon: "https://res.cloudinary.com/dctfbwk0m/image/upload/v1716642833/Screenshot_2024-05-25_183744-min_ghim22.png",
  },
];

const ListOptionsSidebar = () => {
  const { listOptionsSidebar, setListOptionsSidebar } =
    useContext(SettingsContext);

  const [sortOpen, setSortOpen] = useState(false);

  const renderSortOptions = () => {
    return (
      <ul
        style={{
          listStyleType: "none",
          paddingLeft: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {sortOptionList.map((eachOption) => (
          <li
            key={eachOption.id}
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              color: "#fff",
              fontSize: "17px",
              fontWeight: 300,
              cursor: "pointer",
              paddingTop: "7px",
              paddingBottom: "7px",
              paddingLeft: "5px",
            }}
            onClick={() => {}}
          >
            {eachOption.icon}
            {eachOption.name}
          </li>
        ))}
      </ul>
    );
  };

  const renderColorsContainer = () => {
    return (
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          flexWrap: "wrap",
          gap: 5,
          marginTop: "10px",
        }}
      >
        {colorsAndImages.map((eachObj) => (
          <li
            key={eachObj.id}
            style={{
              backgroundImage: `url(${eachObj.icon})`,
              height: "75px",
              width: "23%",
              borderRadius: "5px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              cursor: "pointer",
            }}
          ></li>
        ))}
      </ul>
    );
  };

  return (
    <MainContainer
      id="outer"
      isOpen={listOptionsSidebar}
      onClick={(e) => e.target.id === "outer" && setListOptionsSidebar(false)}
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
            Options
          </h1>
          <Button onClick={() => setListOptionsSidebar(false)}>
            <IoClose color="#939393" />
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginTop: "15px",
            paddingRight: "5px",
          }}
          onClick={() => setSortOpen((prevState) => !prevState)}
        >
          <button
            style={{
              display: "flex",
              height: "40px",
              alignItems: "center",
              fontSize: "20px",
              gap: "10px",
              fontWeight: 600,
              background: "transparent",
              border: "none",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <RiArrowUpDownLine color="#939393" />
            <p
              style={{
                fontSize: "20px",
                fontWeight: 400,
                color: "#fff",
              }}
            >
              Sort by
            </p>
          </button>
          {sortOpen ? (
            <IoIosArrowDown color="#939393" fontSize={20} />
          ) : (
            <IoIosArrowForward color="#939393" fontSize={20} />
          )}
        </div>
        {sortOpen && renderSortOptions()}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginTop: "15px",
            paddingRight: "5px",
          }}
        >
          <button
            style={{
              display: "flex",
              height: "40px",
              alignItems: "center",
              fontSize: "20px",
              gap: "10px",
              fontWeight: 600,
              background: "transparent",
              border: "none",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <FiPrinter color="#939393" />
            <p
              style={{
                fontSize: "20px",
                fontWeight: 400,
                color: "#fff",
              }}
            >
              Print
            </p>
          </button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginTop: "15px",
            paddingRight: "5px",
          }}
        >
          <button
            style={{
              display: "flex",
              height: "40px",
              alignItems: "center",
              fontSize: "20px",
              gap: "10px",
              fontWeight: 600,
              background: "transparent",
              border: "none",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <FaRegFilePdf color="#939393" />
            <p
              style={{
                fontSize: "20px",
                fontWeight: 400,
                color: "#fff",
              }}
            >
              PDF
            </p>
          </button>
        </div>

        <h1 style={{ color: "#fff", marginTop: "15px", fontWeight: "400" }}>
          Themes
        </h1>
        {renderColorsContainer()}
      </MainSection>
    </MainContainer>
  );
};

export default ListOptionsSidebar;

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
