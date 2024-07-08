import Button from "../Button";
import Typography from "../Typograhy";
import style from "./index.module.css";
import watch from "../../../src/assets/images/watch.png";
const Hero = () => {
  return (
    <div className={style.hero_container}>
      <div className={style.top_hero}>
        <Typography fontWeight="700" size="25px" lineHeight="50px">
          Stay connected, Stay fit,Stay stylish with{" "}
          <Typography
            fontWeight="700"
            size="25px"
            lineHeight="50px"
            color="#056050"
          >
            Timbo Cloud
          </Typography>
          watches
        </Typography>
      </div>
      <div className={style.flex_container}>
        <div className={style.flex_item}>
          <div>
            <Typography fontWeight="600" size="34px" lineHeight="40px">
              T5 Mini Smart Watch
            </Typography>
            <Typography fontWeight="500" size="16px" lineHeight="25px">
              Stay connected and healthy with our latest smart watches! Track
              your workouts and recieve notification on a go.
            </Typography>
            <div className={style.btn_container}>
              <Button verticalMargin="32px">Explore product</Button>
            </div>
          </div>
        </div>
        <div className={style.flex_item}>
          <div>
            <img src={watch} className={style.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
