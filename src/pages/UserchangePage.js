import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import "../css/userchange.css";
import "../css/signup.css";

export default function UserchangePage() {
  return (
    <>
      <Header></Header>
      <form>
        <div className="userchange">
          <div className="userchangebox">
            <div>회원 정보 수정</div>
            <div className="signup_list">
              <p>id</p>
              <input type="text"></input>
            </div>

            <div className="signup_list">
              <p>nickname</p>
              <input type="text"></input>
            </div>
            <div className="signup_list">
              <p>e-mail</p>
              <input type="text"></input>
            </div>
            <div className="signup_list">
              <p>phone number</p>
              <input type="text"></input>
            </div>
            <div className="signup_button">
              <button>확인</button>
              <button>취소</button>
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </>
  );
}
