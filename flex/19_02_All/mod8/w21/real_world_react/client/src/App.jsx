import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { UserProvider } from "./contexts/userContext";
import { SystemsProvider } from "./contexts/systemContext";

function App() {
  return (
    <>
      <UserProvider>
        <NavBar />
        <SystemsProvider>
          <Outlet />
        </SystemsProvider>
      </UserProvider>
    </>
  );
}

export default App;
