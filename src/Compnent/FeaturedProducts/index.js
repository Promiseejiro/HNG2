import Product from "../ProductCard";
import Typography from "../Typograhy";
import style from "./index.module.css";
const FeaturedProduct = () => {
  return (
    <div className={style.section}>
      <Typography
        fontWeight="600"
        size="30px"
        lineHeight="40px"
        align="left"
        marginVertical="20px"
        marginHorizontal="30px"
      >
        Featured Product
      </Typography>
      <div className={style.flex_cntainer}>
        <div>
          <div className={style.verticalLine}></div>
        </div>
        <div className={style.second_flex}>
          <div>
            <div className={style.card_list}>
              <Product />

              <Product />

              <Product />

              <Product />

              <Product />

              <Product />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
