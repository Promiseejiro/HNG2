import style from "./index.module.css";

const Button = ({
  clickHandler,
  horizontalMargin = "0px",
  verticalMargin = "16px",
  children,
  textSize = "16px",
  color = "#ffffff",
  fontWeight = "500",
  verticalPadding = "8px",
  horizontalPadding = "16px",
}) => {
  return (
    <button
      className={style.btn}
      style={{
        margin: `${verticalMargin} ${horizontalMargin}`,
        fontWeight: `${fontWeight}`,
        fontSize: `${textSize}`,
        padding: `${verticalPadding} ${horizontalPadding}`,
      }}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
