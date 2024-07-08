import timesIcon from "../../../src/assets/svg/times.svg";

import style from "./index.module.css";
const SideBar = ({ closeSideBar }) => {
  return (
    <div className={style.container}>
      <img src={timesIcon} className={style.icon} onClick={closeSideBar} />
      <div className={style.sideBar}>
        <div className={style.sideBar_ist}>
          <a onClick={closeSideBar}>Home</a>
          <a onClick={closeSideBar}>Category</a>
          <a onClick={closeSideBar}>Blog</a>
          <a onClick={closeSideBar}>Contacts</a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
