import timesIcon from "../../../src/assets/svg/times.svg";

import style from "./index.module.css";
const SideBar = ({ closeSideBar }) => {
  return (
    <div className={style.container}>
      <img src={timesIcon} className={style.icon} onClick={closeSideBar} />
      <div className={style.sideBar}>
        <div className={style.sideBar_ist}>
          <a>Home</a>
          <a>Category</a>
          <a>Blog</a>
          <a>Contacts</a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
