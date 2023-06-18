//비밀번호 입력 화면
import { Link } from "react-router-dom";

function InputPassword() {
  return (
    <>
      <div>
        비밀번호<input></input>
      </div>
      <Link to="/SearchPassword">
        <button>비밀번호 찾기</button>
      </Link>
      <Link to="/Main">
        <button>다음</button>
      </Link>
    </>
  );
}

export default InputPassword;
