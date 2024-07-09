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
import toast from "react-hot-toast";
import Toast from "../../Compnent/Toast";
const SingleProduct = () => {
  const { producturl } = useParams();
  console.log(producturl);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [cartCount, setCountCount] = useState(0);

  const product = [
    {
      image: watch,
      name: "12 pro smart watch",
      des: "Stay connected and healthy with our latest smart watches! Track your workouts and receive notifications on the go.",
      rating: 5,
      price: 500,
      url: "secondWatch.png",
    },
    {
      image: iphone,
      name: "Iphone 13 pro max",
      des: "Experience the latest technology with the iPhone 13 Pro Max, featuring an advanced camera system and a powerful A15 Bionic chip.",
      rating: 5,
      price: 1500,
      url: "iphone.png",
    },
    {
      image: pinkwatch,
      name: "Germina watch",
      des: "Fashion meets functionality with the Germina watch, offering stylish design and reliable performance for your daily needs.",
      rating: 4,
      price: 300,
      url: "pinkwatch.png",
    },
    {
      image: smartearpod,
      name: "Smart earpods",
      des: "Enjoy crystal clear sound and seamless connectivity with our smart earpods, perfect for music lovers and professionals.",
      rating: 3,
      price: 200,
      url: "smartearpod.jpg",
    },
    {
      image: tablet,
      name: "Tablet",
      des: "Stay productive and entertained with our versatile tablet, offering high performance and a stunning display.",
      rating: 4,
      price: 900,
      url: "tablet.png",
    },
    {
      image: ctvCamera,
      name: "3D Security camera",
      des: "Protect your home with our advanced 3D security camera, providing clear footage and reliable monitoring.",
      rating: 5,
      price: 600,
      url: "ctvcamera.png",
    },
    {
      image: ctvcamera2,
      name: "CCTV camera",
      des: "Ensure safety with our dependable CCTV camera, designed for high-quality surveillance and easy installation.",
      rating: 4,
      price: 600,
      url: "2ctvcamera.png",
    },
    {
      image: minicamera,
      name: "Camera",
      des: "Capture life's moments with our compact and powerful camera, perfect for photography enthusiasts.",
      rating: 3,
      price: 600,
      url: "minicamera.png",
    },
    {
      image: gamepad,
      name: "Game pad",
      des: "Enhance your gaming experience with our ergonomic game pad, offering precision and comfort for long gaming sessions.",
      rating: 3,
      price: 600,
      url: "gamepad.png",
    },
    {
      image: gameset,
      name: "Excel game set",
      des: "Level up your gaming setup with the Excel game set, featuring high-quality components for an immersive experience.",
      rating: 3,
      price: 600,
      url: "gameset.png",
    },
    {
      image: watch,
      name: "12 pro smart watch",
      des: "Stay connected and healthy with our latest smart watches! Track your workouts and receive notifications on the go.",
      rating: 5,
      price: 500,
      url: "secondWatch.png",
    },
    {
      image: ledtv,
      name: "Smart TV",
      des: "Enjoy stunning visuals and smart features with our Smart TV, perfect for home entertainment.",
      rating: 5,
      price: 500,
      url: "ledtv.png",
    },
    {
      image: fridge,
      name: "Standard washing",
      des: "Keep your clothes clean and fresh with our standard washing machine, offering efficient and reliable performance.",
      rating: 5,
      price: 500,
      url: "fridge.png",
    },
    {
      image: riglight,
      name: "Ring light",
      des: "Achieve professional lighting for your photos and videos with our adjustable ring light, perfect for content creators.",
      rating: 5,
      price: 500,
      url: "riglight.png",
    },
    {
      image: earpod2,
      name: "Wireless Ear bud",
      des: "Experience the freedom of wireless sound with our high-quality ear buds, designed for comfort and superior audio.",
      rating: 5,
      price: 500,
      url: "2earpod.png",
    },
  ];

  const updateCartCount = (count) => {
    setCountCount(count);
  };
  const addToCart = () => {
    let savedProduct = JSON.parse(localStorage.getItem("timbo-product"));
    if (!savedProduct) {
      savedProduct = [
        {
          image: currentProduct.image,
          name: currentProduct.name,
          rating: currentProduct.rating,
          price: currentProduct.price,
          url: currentProduct.url,
          qty: 1,
        },
      ];
      localStorage.setItem("timbo-product", JSON.stringify(savedProduct));
      updateCartCount(savedProduct.length);
      toast(<Toast text={"Item Added to cart"} type="success" />);
    } else {
      const prevProduct = localStorage.getItem("timbo-product");
      const checkIfProductIsincart = JSON.parse(prevProduct).filter(
        (product) => product.url === product.url
      );
      if (checkIfProductIsincart.length === 1) {
        toast(<Toast text={"Item Already in cart"} type="success" />);
      } else {
        savedProduct = [
          ...savedProduct,
          {
            image: currentProduct.image,
            name: currentProduct.name,
            rating: currentProduct.rating,
            price: currentProduct.price,
            url: currentProduct.url,
            qty: 1,
          },
        ];
        toast(<Toast text={"Item Added to cart"} type="success" />);
        updateCartCount(savedProduct.length);
        localStorage.setItem("timbo-product", JSON.stringify(savedProduct));
      }
    }
  };
  useEffect(() => {
    console.log(product.filter((prod) => prod.url === producturl));
    setCurrentProduct(product.filter((prod) => prod.url === producturl));
    console.log(product.filter((prod) => prod.url === producturl)[0]);
    let savedProduct = JSON.parse(localStorage.getItem("timbo-product"));
    setCountCount(savedProduct.length);
  }, []);
  return (
    <section>
      <Header count={cartCount} />
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
      {currentProduct.length > 0 && (
        <div>
          {currentProduct.map((prod) => (
            <div className={style.flex_container}>
              <div className={style.flex_item}>
                <div>
                  <Typography fontWeight="600" size="34px" lineHeight="40px">
                    {prod.name}
                  </Typography>
                  <Typography fontWeight="500" size="16px" lineHeight="25px">
                    {prod.des}
                  </Typography>
                  <div className={style.btn_container}>
                    <div className={style.price_container}>
                      <Typography
                        fontWeight="500"
                        size="16px"
                        lineHeight="25px"
                      >
                        ${prod.price}
                      </Typography>
                    </div>
                    <div>
                      <Button verticalMargin="32px" clickHandler={addToCart}>
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.flex_item}>
                <div>
                  <img src={prod.image} className={style.image} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </section>
  );
};

export default SingleProduct;
