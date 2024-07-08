import style from "./index.module.css";
import logo from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className={style.logo_container}>
      <Link to={`/`}>
        <img src={logo} className={style.logo} />
      </Link>
    </div>
  );
};

export default Logo;
