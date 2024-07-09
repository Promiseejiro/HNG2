import Logo from "../Logo";
import style from "./index.module.css";
import cart from "../../assets/svg/cart.svg";
import notify from "../../assets/svg/notification.svg";
import bar from "../../assets/svg/3bar.svg";
import { Link } from "react-router-dom";
import SideBar from "../SideBar";
import { useState } from "react";
const Header = ({ count }) => {
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
          <a href="#blog">Blog</a>
          <a href="#contact">Contacts</a>
        </div>
      </div>
      <div className={style.icon_container}>
        <Link to="/cart">
          <div className={style.cartContainer}>
            <div className={style.count}>
              <p> {count}</p>
            </div>

            <img src={cart} className={style.header_icon} />
          </div>
        </Link>
        <div>
          <img src={bar} className={style.bar} onClick={sideBarOpenHandler} />
        </div>
      </div>
      {openSideBar && <SideBar closeSideBar={sideBarOpenHandler} />}
    </header>
  );
};

export default Header;
