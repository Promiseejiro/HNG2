import Button from "../Button";
import Product from "../ProductCard";
import Typography from "../Typograhy";
import style from "./index.module.css";
import watch from "../../assets/images/secondWatch.png";
import iphone from "../../assets/images/iphone.png";
import pinkwatch from "../../assets/images/pinkwatch.png";
import smartearpod from "../../assets/images/smartearpod.jpg";
import tablet from "../../assets/images/tablet.png";
import ctvCamera from "../../assets/images/ctvcamera.png";
import ctvcamera2 from "../../assets/images/2ctvcamera.png";
import minicamera from "../../assets/images/minicamera.png";
import gamepad from "../../assets/images/gamepad.png";
import gameset from "../../assets/images/gameset.png";
import ledtv from "../../assets/images/ledtv.png";
import fridge from "../../assets/images/fridge.png";
import riglight from "../../assets/images/riglight.png";
const BestSellersProduct = () => {
  const product = [
    {
      image: watch,
      name: "12 pro smart watche",
      rating: 5,
      price: "$500",
    },
    {
      image: iphone,
      name: "Iphone 13 pro max",
      rating: 5,
      price: "$1500",
    },
    {
      image: pinkwatch,
      name: "Germina watch",
      rating: 4,
      price: "$300",
    },
    {
      image: smartearpod,
      name: "Smart earpods",
      rating: 3,
      price: "$200",
    },
    {
      image: tablet,
      name: "Tablet",
      rating: 4,
      price: "$900",
    },
    {
      image: ctvCamera,
      name: "3D Security camera",
      rating: 5,
      price: "$600",
    },
    {
      image: ctvcamera2,
      name: "CCTV camera",
      rating: 4,
      price: "$600",
    },
  ];
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
            {product.map((item) => (
              <Product {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellersProduct;
