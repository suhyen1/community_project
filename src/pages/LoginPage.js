import Header from "../component/Header";
import Footer from "../component/Footer";
import "../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const handlerInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/Login", formData, {
        headers: { "content-type": "application/json" },
      })
      .then((e) => {
        navigate("/");
      });
  };

  return (
    <>
      <Header></Header>
      <form onSubmit={handleSubmit}>
        <div className="loginpage">
          <div className="loginbox">
            <div>Log in</div>
            <div>
              <p>id</p>
              <input
                name="id"
                value={formData.id}
                onChange={handlerInputChange}
              ></input>
            </div>
            <div>
              <p>pw</p>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handlerInputChange}
              ></input>
            </div>
            <div className="loginnav">
              <div>
                <input type="checkbox" value="remember"></input>
                <label>remember id</label>
              </div>
              <div>
                <Link to="/signup">sign up</Link>
              </div>
            </div>
            <div>
              <button>Log in</button>
            </div>
            <div>
              <Link to="/findpassword">forgot password</Link>
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </>
  );
}
