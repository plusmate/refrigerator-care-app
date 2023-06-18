import { Link } from "react-router-dom";
import "../CSS/menu.css";

function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link to="/mypage">마이페이지</Link>
        <ul className="submenu">
          <li>
            <Link to="#">내정보수정</Link>
          </li>
          <li>
            <Link to="#">냉장고 정보 변경</Link>
          </li>
          <li>
            <Link to="#">기기 변경</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/info">INFO</Link>
        <ul className="submenu">
          <li>
            <Link to="#">Tutorial</Link>
          </li>
          <li>
            <Link to="#">찾아오는길</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/">로그아웃</Link>
      </li>
    </ul>
  );
}
export default Menu;
