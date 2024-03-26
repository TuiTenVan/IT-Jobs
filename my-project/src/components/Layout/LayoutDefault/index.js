/* eslint-disable no-unused-vars */
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import "./LayoutDefault.scss";
import { useSelector } from "react-redux";

function LayoutDefault() {
  const authen = useSelector((state) => state.authenReducer);

  return (
    <>
      <div className="layout-default">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default LayoutDefault;
