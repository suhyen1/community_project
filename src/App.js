import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import FindpasswordPage from "./pages/FindpasswordPage";
import InformationPage from "./pages/InformationPage";
import UserchangePage from "./pages/UserchangePage";
import UserleavePage from "./pages/UserleavePage";
import MypostsPage from "./pages/MypostsPage";
import DetailMypostPage from "./pages/DetailMypostPage";
import WritePage from "./pages/WritePage";
import EditpostPage from "./pages/EditpostPage";
import Notification from "./pages/NotificationPage";
import HelloPage from "./pages/HelloPage";
import CommunityPage from "./pages/CommunityPage";
import FuncommunityPage from "./pages/FuncommunityPage";
import OotdPage from "./pages/OotdPage";
import UsedsalesPage from "./pages/UsedsalesPage";
import UsedpurchasePage from "./pages/UsedpurchasePage";
import NewpasswordPage from "./pages/NewpasswordPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/findpassword" element={<FindpasswordPage />}></Route>
        <Route path="/information" element={<InformationPage />}></Route>
        <Route path="/change" element={<UserchangePage />}></Route>
        <Route path="/leave" element={<UserleavePage />}></Route>
        <Route path="/myposts" element={<MypostsPage />}></Route>
        <Route path="/detailmypost" element={<DetailMypostPage />}></Route>
        <Route path="/write" element={<WritePage />}></Route>
        <Route path="/editpost" element={<EditpostPage />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/hello" element={<HelloPage />}></Route>
        <Route path="/community" element={<CommunityPage />}></Route>
        <Route path="/funcommunity" element={<FuncommunityPage />}></Route>
        <Route path="/ootd" element={<OotdPage />}></Route>
        <Route path="/usedsales" element={<UsedsalesPage />}></Route>
        <Route path="/usedpurchase" element={<UsedpurchasePage />}></Route>
        <Route path="/newpassword" element={<NewpasswordPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
