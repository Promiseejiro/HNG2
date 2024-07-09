import { useState } from "react";
import delIcon from "../../../src/assets/svg/delete.svg";
import gr from "../../../src/assets/svg/greater.svg";
import lw from "../../../src/assets/svg/lower.svg";
import Typography from "../Typograhy";
import style from "./index.module.css";
const CartTableItem = ({
  image,
  name,
  rating,
  price,
  url,
  qty,
  actionInProduct,
}) => {
  const [quantity, setQuantity] = useState(qty);
  return (
    <tr className={style.container}>
      <td>
        <div className={style.image_container}>
          <img src={image} className={style.image} />
        </div>
      </td>
      <td>
        <div className={style.header}>
          <p className={style.product_name}>{name}</p>
        </div>
        <div></div>
      </td>
      <td>
        <div className={style.qty}>
          <div className={style.num}>
            <Typography
              fontWeight="500"
              size="14px"
              align="left"
              marginHorizontal="0"
              marginVertical="0"
            >
              {quantity}
            </Typography>
          </div>
          <div className={style.control}>
            <img
              src={lw}
              className={style.controlbtn}
              onClick={() => {
                setQuantity(quantity + 1);
                actionInProduct(url, "increase");
              }}
            />
            <img
              src={gr}
              className={style.controlbtn}
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                  actionInProduct(url, "decrease");
                } else {
                  setQuantity(0);
                  actionInProduct(url, "clear");
                }
              }}
            />
          </div>
        </div>
      </td>
      <td>${price}</td>
      <td>
        <div>
          <img
            className={style.clearItem}
            src={delIcon}
            onClick={() => {
              actionInProduct(url, "clear");
            }}
          />
        </div>
      </td>
    </tr>
  );
};

export default CartTableItem;
