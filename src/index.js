import react from "react";
import { createRoot } from "react-dom/client";
react;
import MainPage from "./components/MainPage";

const Main = () => {
  return (
    <div>
      <MainPage />
    </div>
  );
};

const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<Main />);
