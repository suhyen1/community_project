import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import "../css/myposts.css";
import "../css/hello.css";

export default function UsedpurchasePage() {
  return (
    <>
      <Header></Header>
      <div className="mypostspage">
        <div>중고장터(구매)</div>
        <div className="mypost_box">
          <div>
            <div>
              <p>글번호</p>
              <p>사진</p>
              <p>제목</p>
            </div>
            <div className="post_information">
              <p>닉네임</p>
              <p>날짜</p>
              <p>좋아요수</p>
              <p>조회수</p>
            </div>
          </div>
          <div className="mypost_content">
            <div>
              <p>1</p>
              <div>
                <img src="images" width="82px" height="99px"></img>
              </div>
              <p>제목</p>
            </div>
            <div>
              <p>suhyen</p>
              <p>2024-02-02/13:00</p>
              <p>20</p>
              <p>30</p>
            </div>
          </div>
          <div className="mypost_content">
            <div>
              <p>1</p>
              <div>
                <img src="images" width="82px" height="99px"></img>
              </div>
              <p>제목</p>
            </div>
            <div>
              <p>suhyen</p>
              <p>2024-02-02/13:00</p>
              <p>20</p>
              <p>30</p>
            </div>
          </div>
          <div className="mypost_content">
            <div>
              <p>1</p>
              <div>
                <img src="images" width="82px" height="99px"></img>
              </div>
              <p>제목</p>
            </div>
            <div>
              <p>suhyen</p>
              <p>2024-02-02/13:00</p>
              <p>20</p>
              <p>30</p>
            </div>
          </div>
          <div className="mypost_content">
            <div>
              <p>1</p>
              <div>
                <img src="images" width="82px" height="99px"></img>
              </div>
              <p>제목</p>
            </div>
            <div>
              <p>suhyen</p>
              <p>2024-02-02/13:00</p>
              <p>20</p>
              <p>30</p>
            </div>
          </div>
          <div className="mypost_content">
            <div>
              <p>1</p>
              <div>
                <img src="images" width="82px" height="99px"></img>
              </div>
              <p>제목</p>
            </div>
            <div>
              <p>suhyen</p>
              <p>2024-02-02/13:00</p>
              <p>20</p>
              <p>30</p>
            </div>
          </div>
          <div className="mypost_content">
            <div>
              <p>1</p>
              <div>
                <img src="images" width="82px" height="99px"></img>
              </div>
              <p>제목</p>
            </div>
            <div>
              <p>suhyen</p>
              <p>2024-02-02/13:00</p>
              <p>20</p>
              <p>30</p>
            </div>
          </div>
          <div className="mypost_content">
            <div>
              <p>1</p>
              <div>
                <img src="images" width="82px" height="99px"></img>
              </div>
              <p>제목</p>
            </div>
            <div>
              <p>suhyen</p>
              <p>2024-02-02/13:00</p>
              <p>20</p>
              <p>30</p>
            </div>
          </div>
          <div className="mypost_content">
            <div>
              <p>1</p>
              <div>
                <img src="images" width="82px" height="99px"></img>
              </div>
              <p>제목</p>
            </div>
            <div>
              <p>suhyen</p>
              <p>2024-02-02/13:00</p>
              <p>20</p>
              <p>30</p>
            </div>
          </div>
          <div className="mypost_content">
            <div>
              <p>1</p>
              <div>
                <img src="images" width="82px" height="99px"></img>
              </div>
              <p>제목</p>
            </div>
            <div>
              <p>suhyen</p>
              <p>2024-02-02/13:00</p>
              <p>20</p>
              <p>30</p>
            </div>
          </div>
          <div className="mypost_content">
            <div>
              <p>1</p>
              <div>
                <img src="images" width="82px" height="99px"></img>
              </div>
              <p>제목</p>
            </div>
            <div>
              <p>suhyen</p>
              <p>2024-02-02/13:00</p>
              <p>20</p>
              <p>30</p>
            </div>
          </div>
        </div>
        <div className="mypost_box_button">
          <button>&lt;</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>10</button>
          <button> &gt;</button>
        </div>
        <div className="hello_button">
          <Link to="/write">
            <button>글쓰기</button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
