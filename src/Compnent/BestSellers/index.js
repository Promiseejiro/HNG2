import Button from "../Button";
import Typography from "../Typograhy";
import watch from "../../../src/assets/svg/bestSellers.svg";
import style from "./index.module.css";
const BestSellers = () => {
  return (
    <section className={style.section}>
      <div className={style.flex_container}>
        <div className={`${style.flex_item} ${style.content}`}>
          <div>
            <Typography
              fontWeight="600"
              size="30px"
              lineHeight="40px"
              align="left"
            >
              Best sellers
            </Typography>
            <Typography
              fontWeight="500"
              size="16px"
              lineHeight="25px"
              align="left"
              width="65%"
            >
              Take a look at our top selling product of the week.
            </Typography>
            <div className={style.btn_container}>
              <Button
                   fontWeight="400"
                textSize="14px"
                verticalPadding="5px"
                horizontalMargin="10px"
              >
                Shop now
              </Button>
            </div>
          </div>
        </div>
        <div className={style.flex_item}>
          <div className={style.image_container}>
            <img src={watch} className={style.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
