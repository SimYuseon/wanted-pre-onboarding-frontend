import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
