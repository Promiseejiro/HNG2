import timesIcon from "../../../src/assets/svg/times.svg";
import success from "../../../src/assets/svg/Mask group.svg";
import style from "./index.module.css";
import Typography from "../Typograhy";
import Button from "../Button";
import { Link } from "react-router-dom";
const CheckOutModal = ({ closeCheckout }) => {
  return (
    <section className={style.modal}>
      <div className={style.content}>
        <img src={success} className={style.successIcon} />
        <Typography
          fontWeight="600"
          size="18px"
          lineHeight="25px"
          color="#056050"
          marginHorizontal="0"
        >
          Congratulations
        </Typography>
        <Typography
          fontWeight="500"
          size="14px"
          lineHeight="25px"
          marginHorizontal="0"
          color="#056050"
        >
          Checkout successfull
        </Typography>
        <Link to="/" className={style.link}>
          <Button
            verticalPadding="5px"
            horizontalPadding="50px"
            fontSize="14px"
            fontWeight="400"
            clickHandler={closeCheckout}
          >
            Back to shop
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CheckOutModal;
