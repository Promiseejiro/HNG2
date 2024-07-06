import Button from "../Button";
import Product from "../ProductCard";
import Typography from "../Typograhy";
import style from "./index.module.css";
import fridge from "../../../src/assets/svg/fridge.svg";
const BestSellersProduct = () => {
  return (
    <section>
      <div className={style.flex_container}>
        <div className={`${style.first_container} ${style.content}`}>
          <div>
            <div className={style.image_container}>
              <img src={fridge} className={style.image} />
            </div>
            <div className={style.content}>
              <Typography
                fontWeight="500"
                size="16px"
                lineHeight="25px"
                align="left"
                width="65%"
                marginHorizontal="10px"
              >
                Standard washing machine
              </Typography>
              <Typography
                fontWeight="500"
                size="16px"
                lineHeight="25px"
                align="left"
                width="65%"
              >
                $300
              </Typography>
              <div className={style.btn_container}>
                <Button
                  fontWeight="400"
                  textSize="14px"
                  verticalPadding="2px"
                  horizontalMargin="10px"
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.flex_item}>
          <div className={style.card_list}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            {/* <Product />
            <Product /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellersProduct;
