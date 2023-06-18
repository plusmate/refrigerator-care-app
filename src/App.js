import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage.js";
import InputID from "./Pages/InputID.js";
import InputPassword from "./Pages/InputPassword.js";
import SignUp from "./Pages/SignUp.js";
import MyPage from "./Pages/MyPage.js";
import INFO from "./Pages/INFO.js";
import SearchAccount from "./Pages/SearchAccount.js";

import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Firebase 초기화
    const firebaseConfig = {
      apiKey: "AIzaSyCB7Lzkp1PFvHs9sNDVCfBm7o4ADfoFSCQ",
      authDomain: "seven7cci.firebaseapp.com",
      projectId: "seven7cci",
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Firestore 데이터 읽기
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Data"));
      const newData = querySnapshot.docs.map(doc => doc.data());
      setData(newData);
    };

    fetchData();

    // 5초마다 데이터 업데이트
    const interval = setInterval(fetchData, 5000);

    // 컴포넌트 언마운트 시 인터벌 클리어
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log(data); // 데이터가 업데이트될 때마다 콘솔에 출력
  }, [data]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputID />} />
        <Route path="/InputPassword" element={<InputPassword />} />
        <Route path="/searchAccount" element={<SearchAccount />} />
        <Route path="/main" element={<MainPage data={data} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/info" element={<INFO />} />
      </Routes>
    </Router>
  );
}

export default App;