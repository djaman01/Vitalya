import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homeSections/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
