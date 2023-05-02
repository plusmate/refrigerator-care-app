//메인화면
import Refregerator from "../Components/Refregerator.js";
import ClosedRefregerator from "../Components/ClosedRefregerator.js";
import Menu from "../Components/Menu.js";
import { useState } from "react";

function MainPage() {
  const [doorManager, setDoorManager] = useState(false);

  return (
    <>
      <Menu />
      {doorManager ? (
        <Refregerator onClick={() => setDoorManager(true)} />
      ) : (
        <ClosedRefregerator onClick={() => setDoorManager(true)} />
      )}
    </>
  );
}

export default MainPage;
