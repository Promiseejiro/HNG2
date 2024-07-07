import Logo from "../Logo";
import style from "./index.module.css";
import cart from "../../assets/svg/cart.svg";
import notify from "../../assets/svg/notification.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <div className={style.logo_container}>
          <Logo />
        </div>
      </div>
      <div>
        <div className={style.header_list}>
          <a>Home</a>
          <a>Categoy</a>
          <a>Blog</a>
          <a>Contacts</a>
        </div>
      </div>
      <div className={style.icon_container}>
        <Link to="/cart">
          <img src={cart} className={style.header_icon} />
        </Link>
        <img src={notify} className={style.header_icon} />
      </div>
    </header>
  );
};

export default Header;
