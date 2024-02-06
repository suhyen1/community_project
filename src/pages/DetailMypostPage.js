import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import "../css/detailmypost.css";

export default function DetailMypostPage() {
  return (
    <>
      <Header></Header>
      <div className="detailmypost">
        <div className="mypost_title">
          <p>제목</p>
          <div>
            <p>
              <span>카테고리 이름</span>
            </p>
            <p>2024-02-02/14:38</p>
          </div>
        </div>
        <div className="mypost_nav">
          <p>suhyen</p>
          <div>
            <p>좋아요수 16 </p>
            <p>조회수 20 </p>
          </div>
        </div>
        <div className="mypost_main"></div>
        <div className="mypost_endbutton">
          <Link to="/editpost">
            <button>수정</button>
          </Link>
          <button>삭제</button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
