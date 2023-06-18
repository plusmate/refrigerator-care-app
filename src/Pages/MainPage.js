//메인화면
import "../CSS/mainpage.css";
import Refregerator from "../Components/Refregerator.js";
import ClosedRefregerator from "../Components/ClosedRefregerator.js";
import Menu from "../Components/Menu.js";
import { useState } from "react";
import { useParams } from "react-router-dom";

function MainPage() {
  const [doorManager, setDoorManager] = useState(false);
  const { id } = useParams();

  return (
    <div className="wrapper">
      {doorManager ? (
        <>
          <Refregerator onClick={() => setDoorManager(true)} />
          <Menu />
        </>
      ) : (
        <>
          <ClosedRefregerator onClick={() => setDoorManager(true)} />
          <Menu />
        </>
      )}
    </div>
  );
}

export default MainPage;
