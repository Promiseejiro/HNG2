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
      price: 500,
      url: "secondWatch.png",
    },
    {
      image: iphone,
      name: "Iphone 13 pro max",
      rating: 5,
      price: 1500,
      url: "iphone.png",
    },
    {
      image: pinkwatch,
      name: "Germina watch",
      rating: 4,
      price: 300,
      url: "pinkwatch.png",
    },
    {
      image: smartearpod,
      name: "Smart earpods",
      rating: 3,
      price: 200,
      url: "smartearpod.jpg",
    },
    {
      image: tablet,
      name: "Tablet",
      rating: 4,
      price: 900,
      url: "tablet.png",
    },
    {
      image: ctvCamera,
      name: "3D Security camera",
      rating: 5,
      price: 600,
      url: "ctvcamera.png",
    },
    {
      image: ctvcamera2,
      name: "CCTV camera",
      rating: 4,
      price: 600,
      url: "2ctvcamera.png",
    },
    {
      image: minicamera,
      name: "Camera",
      rating: 3,
      price: 600,
      url: "minicamera.png",
    },
    {
      image: gamepad,
      name: "Game pad",
      rating: 3,
      price: 600,
      url: "gamepad.png",
    },
    {
      image: gameset,
      name: "Excel game set",
      rating: 3,
      price: 600,
      url: "gameset.png",
    },
    {
      image: watch,
      name: "12 pro smart watch",
      rating: 5,
      price: 500,
      url: "secondWatch.png",
    },
    {
      image: ledtv,
      name: "Smart TV",
      rating: 5,
      price: 500,
      url: "ledtv.png",
    },
    {
      image: fridge,
      name: "Standard washing",
      rating: 5,
      price: 500,
      url: "fridge.png",
    },
    {
      image: riglight,
      name: "Ring light",
      rating: 5,
      price: 500,
      url: "riglight.png",
    },
    {
      image: earpod2,
      name: "Wireless Ear bud",
      rating: 5,
      price: 500,
      url: "2earpod.png",
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
            {product.map((item, index) => (
              <Product {...item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
