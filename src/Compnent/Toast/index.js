import style from "./index.module.css";
const Toast = ({ type, text }) => {
  return (
    <div className={style.toast}>
      <div>{text}</div>
    </div>
  );
};

export default Toast;
