import Logo from "../Logo";
import style from "./index.module.css";
import search from "../../assets/svg/search.svg";
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
          <a>Home</a>
          <a>Home</a>
          <a>Home</a>
        </div>
      </div>
      <div className={style.icon_container}>
        <img src={search} className={style.header_icon} />
        <img src={search} className={style.header_icon} />
        <img src={search} className={style.header_icon} />
      </div>
    </header>
  );
};

export default Header;
