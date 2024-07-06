import image from "../../assets/images/watch.png";
import Button from "../Button";
import FavoriteBtn from "../FavouriteBtn";
import Rating from "../Rating";
import Typography from "../Typograhy";
import style from "./index.module.css";
const Product = () => {
  return (
    <div className={style.container}>
      <div className={style.image_container}>
        <img src={image} className={style.image} />
      </div>
      <div>
        <div className={style.product_info}>
          <Rating />
          <Typography
            fontWeight="500"
            size="14px"
            align="left"
            marginHorizontal="0"
            marginVertical="0"
          >
            phone
          </Typography>
          <Typography
            fontWeight="500"
            size="14px"
            align="left"
            marginHorizontal="0"
            marginVertical="0"
          >
            200$
          </Typography>
          <div className={style.btn_container}>
            <Button textSize="12px" fontWeight="300" verticalPadding="0px">
              Add to cart
            </Button>
            <FavoriteBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
