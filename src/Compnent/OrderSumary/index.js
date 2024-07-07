import Typography from "../Typograhy";
import style from "./index.module.css";
const OrderSummary = ({ total }) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Typography
          fontWeight="600"
          size="22px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          Order Summary
        </Typography>
      </div>
      <div className={style.flex_container}>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          Subtotal
        </Typography>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          ${total}
        </Typography>
      </div>
      <div className={style.flex_container}>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          Discount
        </Typography>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          $0
        </Typography>
      </div>
      <div className={style.flex_container}>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          Shipping
        </Typography>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          $0
        </Typography>
      </div>
      <div className={style.flex_container}>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          Total
        </Typography>
        <Typography
          fontWeight="500"
          size="18px"
          lineHeight="25px"
          marginHorizontal="0"
        >
          ${total}
        </Typography>
      </div>
    </div>
  );
};

export default OrderSummary;
