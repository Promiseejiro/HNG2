import style from "./index.module.css";
import Typography from "../../Compnent/Typograhy";
import Button from "../../Compnent/Button";
import Header from "../../Compnent/Header";
import Footer from "../../Compnent/Footer";
import { useEffect, useState } from "react";
import watch from "../../../src/assets/images/secondWatch.png";
import iphone from "../../../src/assets/images/iphone.png";
import pinkwatch from "../../../src/assets/images/pinkwatch.png";
import smartearpod from "../../../src/assets/images/smartearpod.jpg";
import tablet from "../../../src/assets/images/tablet.png";
import ctvCamera from "../../../src/assets/images/ctvcamera.png";
import ctvcamera2 from "../../../src/assets/images/2ctvcamera.png";
import minicamera from "../../../src/assets/images/minicamera.png";
import gamepad from "../../../src/assets/images/gamepad.png";
import gameset from "../../../src/assets/images/gameset.png";
import ledtv from "../../../src/assets/images/ledtv.png";
import fridge from "../../../src/assets/images/fridge.png";
import riglight from "../../../src/assets/images/riglight.png";
import earpod2 from "../../../src/assets/images/2earpod.png";
import { Link, useParams } from "react-router-dom";
const SingleProduct = () => {
  const { producturl } = useParams();
  console.log(producturl);
  const [currentProduct, setCurrentProduct] = useState({});
  const product = [
    {
      image: watch,
      name: "12 pro smart watch",
      des: "",
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
      des: "",
    },
    {
      image: pinkwatch,
      name: "Germina watch",
      rating: 4,
      price: 300,
      url: "pinkwatch.png",
      des: "",
    },
    {
      image: smartearpod,
      name: "Smart earpods",
      rating: 3,
      price: 200,
      url: "smartearpod.jpg",
      des: "",
    },
    {
      image: tablet,
      name: "Tablet",
      rating: 4,
      price: 900,
      url: "tablet.png",
      des: "",
    },
    {
      image: ctvCamera,
      name: "3D Security camera",
      rating: 5,
      price: 600,
      url: "ctvcamera.png",
      des: "",
    },
    {
      image: ctvcamera2,
      name: "CCTV camera",
      rating: 4,
      price: 600,
      url: "2ctvcamera.png",
      des: "",
    },
    {
      image: minicamera,
      name: "Camera",
      rating: 3,
      price: 600,
      url: "minicamera.png",
      des: "",
    },
    {
      image: gamepad,
      name: "Game pad",
      rating: 3,
      price: 600,
      url: "gamepad.png",
      des: "",
    },
    {
      image: gameset,
      name: "Excel game set",
      rating: 3,
      price: 600,
      url: "gameset.png",
      des: "",
    },
    {
      image: watch,
      name: "12 pro smart watch",
      rating: 5,
      price: 500,
      url: "secondWatch.png",
      des: "",
    },
    {
      image: ledtv,
      name: "Smart TV",
      rating: 5,
      price: 500,
      url: "ledtv.png",
      des: "",
    },
    {
      image: fridge,
      name: "Standard washing",
      rating: 5,
      price: 500,
      url: "fridge.png",
      des: "",
    },
    {
      image: riglight,
      name: "Ring light",
      rating: 5,
      price: 500,
      url: "riglight.png",
      des: "",
    },
    {
      image: earpod2,
      name: "Wireless Ear bud",
      rating: 5,
      price: 500,
      url: "2earpod.png",
      des: "",
    },
  ];

  useEffect(() => {
    setCurrentProduct(product.filter((prod) => prod.url === producturl)[0]);
  }, []);
  return (
    <section>
      <Header />
      <div className={style.back_container}>
        <Link to="/" className={style.link}>
          <Typography
            fontWeight="500"
            size="18px"
            lineHeight="35px"
            color=" #056050"
            marginVertical="0"
          >
            Back
          </Typography>
        </Link>
      </div>
      <div className={style.flex_container}>
        <div className={style.flex_item}>
          <div>
            <Typography fontWeight="600" size="34px" lineHeight="40px">
              {currentProduct.name}
            </Typography>
            <Typography fontWeight="500" size="16px" lineHeight="25px">
              Stay connected and healthy with our latest smart watches! Track
              your workouts and recieve notification on a go.
            </Typography>
            <div className={style.btn_container}>
              <Button verticalMargin="32px">Add to cart</Button>
            </div>
          </div>
        </div>
        <div className={style.flex_item}>
          <div>
            <img src={currentProduct.image} className={style.image} />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SingleProduct;
