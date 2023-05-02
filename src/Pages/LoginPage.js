//로그인페이지(첫 화면)
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <br />
      아이디<input></input>
      <br />
      비밀번호
      <input></input>
      <br />
      <Link to="/Main">
        <button>로그인</button>
      </Link>
      <Link to="/SignUp">
        <button>회원가입</button>
      </Link>
    </div>
  );
}

export default LoginPage;
