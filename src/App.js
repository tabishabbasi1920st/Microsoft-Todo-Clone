import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MyDay from "./components/MyDay";
import Important from "./components/Important";
import Planned from "./components/Planned";
import All from "./components/All";
import Completed from "./components/Completed";
import AssignToMe from "./components/AssignToMe";
import Tasks from "./components/Tasks";
import SettingsContextProvider from "./components/SettingsContext";
import { useEffect } from "react";

const pageConstants = {
  myDay: "MY_DAY",
  important: "IMPORTANT",
  planned: "PLANNED",
  all: "ALL",
  completed: "COMPLETED",
  assignedToMe: "ASSIGNED_TO_ME",
  tasks: "TASKS",
};

const defaultBgImgUrl =
  "https://res.cloudinary.com/dctfbwk0m/image/upload/v1716528020/pathway-middle-green-leafed-trees-with-sun-shining-through-branches-min_wwvtcm.jpg";

const pageConfigList = [
  {
    pageId: pageConstants.myDay,
    bgImage: defaultBgImgUrl,
    sorted: false,
  },
  {
    pageId: pageConstants.important,
    bgImage: defaultBgImgUrl,
    sorted: false,
  },
  {
    pageId: pageConstants.planned,
    bgImage: defaultBgImgUrl,
    sorted: false,
  },
  {
    pageId: pageConstants.all,
    bgImage: defaultBgImgUrl,
    sorted: false,
  },
  {
    pageId: pageConstants.completed,
    bgImage: defaultBgImgUrl,
    sorted: false,
  },
  {
    pageId: pageConstants.assignedToMe,
    bgImage: defaultBgImgUrl,
    sorted: false,
  },
  {
    pageId: pageConstants.tasks,
    bgImage: defaultBgImgUrl,
    sorted: false,
  },
];

function App() {
  useEffect(() => {
    if (localStorage.getItem("pageConfigList") === null) {
      localStorage.setItem("pageConfigList", JSON.stringify(pageConfigList));
    }
  }, []);

  return (
    <SettingsContextProvider>
      <div className="App">
        <Sidebar>
          <Routes>
            <Route path="/" element={<MyDay />} />
            <Route path="/important" element={<Important />} />
            <Route path="/planned" element={<Planned />} />
            <Route path="/all" element={<All />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/assigned-to-me" element={<AssignToMe />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </Sidebar>
      </div>
    </SettingsContextProvider>
  );
}

export default App;
