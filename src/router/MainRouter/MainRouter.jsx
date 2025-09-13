import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";
import MyPage from "../../pages/MyPage/MyPage";
import Setting from "../../pages/Setting/Setting";
import Detail from "../../pages/Detail/Detail";
import Recommendation from "../../pages/Recommendation/Recommendation";
import Preference from "../../pages/Preference/Preference";
import Signin from "../../pages/Signin/Signin";
import Signup from "../../pages/Signup/Signup";
import Header from "../../components/Common/Header/Header";


function MainRouter() {
  const location = useLocation();

  // 임시로 Header을 포함할 화면 지정
  const headerPaths = ["/", "/myPage", "/setting"]

  return (
    <>
      {/* components > Layout으로 Header 옮기기 */}
      {headerPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/preference" element={<Preference />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default MainRouter;