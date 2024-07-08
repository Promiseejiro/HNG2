import Logo from "../Logo";
import style from "./index.module.css";
import cart from "../../assets/svg/cart.svg";
import notify from "../../assets/svg/notification.svg";
import bar from "../../assets/svg/3bar.svg";
import { Link } from "react-router-dom";
import SideBar from "../SideBar";
import { useState } from "react";
const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const sideBarOpenHandler = () => {
    setOpenSideBar(!openSideBar);
  };
  return (
    <header className={style.header}>
      <div>
        <div className={style.logo_container}>
          <Logo />
        </div>
      </div>
      <div>
        <div className={style.header_list}>
          <Link to="/">Home</Link>
          <a href="#category">Category</a>
          <a>Blog</a>
          <a>Contacts</a>
        </div>
      </div>
      <div className={style.icon_container}>
        <Link to="/cart">
          <img src={cart} className={style.header_icon} />
        </Link>
        <div>
          <img src={notify} className={style.notify} />
        </div>
        <div>
          <img src={bar} className={style.bar} onClick={sideBarOpenHandler} />
        </div>
      </div>
      {openSideBar && <SideBar closeSideBar={sideBarOpenHandler} />}
    </header>
  );
};

export default Header;
