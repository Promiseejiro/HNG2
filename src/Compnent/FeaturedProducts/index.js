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
import earpod2 from "../../assets/images/2earpod.png";
const FeaturedProduct = () => {
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
    {
      image: minicamera,
      name: "Camera",
      rating: 3,
      price: "$600",
    },
    {
      image: gamepad,
      name: "Game pad",
      rating: 3,
      price: "$600",
    },
    {
      image: gameset,
      name: "Excel game set",
      rating: 3,
      price: "$600",
    },
    {
      image: watch,
      name: "12 pro smart watche",
      rating: 5,
      price: "$500",
    },
    {
      image: ledtv,
      name: "Smart TV",
      rating: 5,
      price: "$500",
    },
    {
      image: fridge,
      name: "Standard washing",
      rating: 5,
      price: "$500",
    },
    {
      image: riglight,
      name: "Ring light",
      rating: 5,
      price: "$500",
    },
    {
      image: earpod2,
      name: "Wireless Ear bud",
      rating: 5,
      price: "$500",
    },
  ];
  return (
    <div className={style.section}>
      <Typography
        fontWeight="600"
        size="30px"
        lineHeight="40px"
        align="left"
        marginVertical="20px"
      >
        Featured Product
      </Typography>
      <div className={style.flex_container}>
        <div className={style.first_container}>
          <div className={style.verticalLine}></div>
        </div>
        <div className={style.second_flex}>
          <div className={style.card_list}>
            {product.map((item) => (
              <Product {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
