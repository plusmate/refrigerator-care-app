import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage.js";
import InputID from "./Pages/InputID.js";
import InputPassword from "./Pages/InputPassword.js";
import SignUp from "./Pages/SignUp.js";
import MyPage from "./Pages/MyPage.js";
import INFO from "./Pages/INFO.js";
import SearchAccount from "./Pages/SearchAccount.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputID />} />
        <Route path="/InputPassword" element={<InputPassword />} />
        <Route path="/searchAccount" element={<SearchAccount />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/info" element={<INFO />} />
      </Routes>
    </Router>
  );
}

export default App;
