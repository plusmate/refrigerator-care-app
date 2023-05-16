//로그인페이지(첫 화면)
import { Link } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
  const [userID, setuserID] = useState("");
  const [userPassWD, setuserPassWD] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleuserIDChange(event) {
    setuserID(event.target.value);
  }

  function handleuserPassWDChange(event) {
    setuserPassWD(event.target.value);
  }

  function handleLogin(event) {
    event.preventDefault();

    // 유효성 검사
    if (userID === "id" && userPassWD === "pw") {
      // 인증 성공 시 Main 컴포넌트로 이동
      window.location.href = "/main";
    } else {
      // 인증 실패 시 오류 메시지 출력
      setErrorMessage("Invalid userID or userPassWD");
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          아이디:
          <input type="text" value={userID} onChange={handleuserIDChange} />
        </label>
        <br />
        <label>
          비밀번호:
          <input
            type="userPassWD"
            value={userPassWD}
            onChange={handleuserPassWDChange}
          />
        </label>
        <br />
        <Link to="/searchAccount">
          <button type="button">아이디/비밀번호 찾기</button>
        </Link>
        <button type="submit">로그인</button>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}

export default LoginPage;
