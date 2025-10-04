import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";
import MyPage from "../../pages/MyPage/MyPage";
import Setting from "../../pages/Setting/Setting";
import Detail from "../../pages/Detail/Detail";
import Recommendation from "../../pages/Recommendation/Recommendation";
import Preference from "../../pages/Preference/Preference";
import Header from "../../components/Common/Header/Header";
import Test from "../../pages/Test/Test";
import AuthRouter from "../AuthRouter/AuthRouter";


function MainRouter() {
  const location = useLocation();

  // 임시로 Header을 포함할 화면 지정
  const headerPaths = ["/", "/myPage", "/test"]

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
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default MainRouter;