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

function App() {
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
