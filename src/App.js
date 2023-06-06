import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import FindPwdPage from "./pages/FindPwdPage";
import BiblePage from "./pages/BiblePage";
import CommunityPage from "./pages/CommunityPage";
import MyPage from "./pages/MyPage";
import DetailBiblePage from "./pages/DetailBiblePage";
import Footer from "./components/Footer";
import DetailCommunityPage from "./pages/DetailCommunityPage";
import WritingPostPage from "./pages/WritingPostPage";
import DetailPostPage from "./pages/DetailPostPage";
const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{ height: "auto", minHeight: "100vh", paddingBottom: "8rem" }}
      >
        <Routes>
          {/*navbar footer 등 항상 보이는 page*/}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/findPassword" element={<FindPwdPage />} />
            <Route path="/bible" element={<BiblePage />} />
            <Route path="/bible/:category" element={<DetailBiblePage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route
              path="/community/:category"
              element={<DetailCommunityPage />}
            />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/writingPost" element={<WritingPostPage />} />
            <Route path="/detailPost" element={<DetailPostPage />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
