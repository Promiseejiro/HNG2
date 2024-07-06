import style from "./index.module.css";
import logo from "../../assets/svg/logo.svg";
const Logo = () => {
  return (
    <div className={style.logo_container}>
      <img src={logo} className={style.logo} />
    </div>
  );
};

export default Logo;
