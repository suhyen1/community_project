import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import "../css/write.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

export default function EditpostPage() {
  const [text, setText] = useState("");
  const handleChange = (value) => {
    setText(value);
  };
  return (
    <>
      <Header></Header>
      <form>
        <div className="writepage">
          <div className="writebox">
            <div>글 수정</div>
            <div className="App">
              <input type="text" placeholder="제목입니다"></input>
              <div className="editor-container">
                <ReactQuill
                  theme="snow" // Snow theme 사용 (기본 테마)
                  value={text}
                  onChange={handleChange}
                  placeholder="여기에 텍스트를 입력하세요..."
                  style={{ height: "486px", width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="write_button">
            <button>수정</button>
            <button>취소</button>
          </div>
        </div>
      </form>

      <Footer></Footer>
    </>
  );
}
