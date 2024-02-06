import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import "../css/information.css";
import { useState } from "react";
import axios from "axios";

export default function InformationPage() {
  const [userData, setUserData] = useState({
    name: "",
    id: "",
    nickname: "",
    email: "",
    number: "",
  });

  return (
    <>
      <Header></Header>
      <div className="information">
        <div className="informationbox">
          <div>회원 정보</div>
          <div className="information_lists">
            <div>
              <p>name</p>
              <p>id</p>
              <p>nickname</p>
              <p>e-mail</p>
              <p>number</p>
            </div>
            <div>
              <p>{userData.name}</p>
              <p>{userData.id}</p>
              <p>{userData.nickname}</p>
              <p>{userData.email}</p>
              <p>{userData.number}</p>
            </div>
          </div>
          <div className="myposts">
            <p>내가 쓴 게시물</p>
            <p>
              <Link to="/myposts">모두 보기</Link>
            </p>
          </div>
          <div className="myposts_lists">
            <div className="myposts_lists0">
              <p>제목</p>
              <div>
                <p>30</p>
                <p>25</p>
              </div>
            </div>
            <div className="myposts_lists0">
              <p>제목</p>
              <div>
                <p>30</p>
                <p>25</p>
              </div>
            </div>
            <div className="myposts_lists0">
              <p>제목</p>
              <div>
                <p>30</p>
                <p>25</p>
              </div>
            </div>
            <div className="myposts_lists0">
              <p>제목</p>
              <div>
                <p>30</p>
                <p>25</p>
              </div>
            </div>
            <div className="myposts_lists0">
              <p>제목</p>
              <div>
                <p>30</p>
                <p>25</p>
              </div>
            </div>
            <div className="myposts_lists0">
              <p>제목</p>
              <div>
                <p>30</p>
                <p>25</p>
              </div>
            </div>
            <div className="myposts_lists0">
              <p>제목</p>
              <div>
                <p>30</p>
                <p>25</p>
              </div>
            </div>
          </div>
          <div className="mypost_button">
            <Link to="/change">
              <button>수정</button>
            </Link>
            <Link to="/leave">
              <button>탈퇴</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
