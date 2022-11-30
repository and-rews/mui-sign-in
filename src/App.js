import { Route, Routes } from "react-router";
import "./App.css";
import ForgotPassword from "./components/ForgotPassword";
import HomePage from "./components/Homepage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default App;
