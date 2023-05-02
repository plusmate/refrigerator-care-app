import { Link } from "react-router-dom";
import "../CSS/menu.css";

function Menu() {
  return (
    <ul class="menu">
      <li>
        <Link to="/">Login</Link>
        <ul class="submenu">
          <li>
            <a href="#">submenu01</a>
          </li>
          <li>
            <a href="#">submenu02</a>
          </li>
          <li>
            <a href="#">submenu03</a>
          </li>
          <li>
            <a href="#">submenu04</a>
          </li>
          <li>
            <a href="#">submenu05</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">MENU2</a>
        <ul class="submenu">
          <li>
            <a href="#">submenu01</a>
          </li>
          <li>
            <a href="#">submenu02</a>
          </li>
          <li>
            <a href="#">submenu03</a>
          </li>
          <li>
            <a href="#">submenu04</a>
          </li>
          <li>
            <a href="#">submenu05</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">MENU3</a>
        <ul class="submenu">
          <li>
            <a href="#">submenu01</a>
          </li>
          <li>
            <a href="#">submenu02</a>
          </li>
          <li>
            <a href="#">submenu03</a>
          </li>
          <li>
            <a href="#">submenu04</a>
          </li>
          <li>
            <a href="#">submenu05</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">MENU4</a>
        <ul class="submenu">
          <li>
            <a href="#">submenu01</a>
          </li>
          <li>
            <a href="#">submenu02</a>
          </li>
          <li>
            <a href="#">submenu03</a>
          </li>
          <li>
            <a href="#">submenu04</a>
          </li>
          <li>
            <a href="#">submenu05</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">MENU5</a>
        <ul class="submenu">
          <li>
            <a href="#">submenu01</a>
          </li>
          <li>
            <a href="#">submenu02</a>
          </li>
          <li>
            <a href="#">submenu03</a>
          </li>
          <li>
            <a href="#">submenu04</a>
          </li>
          <li>
            <a href="#">submenu05</a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
export default Menu;
