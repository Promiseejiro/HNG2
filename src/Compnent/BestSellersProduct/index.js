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
import toast from "react-hot-toast";
const BestSellersProduct = ({ updateCartCount }) => {
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
  ];

  const addToCart = () => {
    let savedProduct = JSON.parse(localStorage.getItem("timbo-product"));
    if (!savedProduct) {
      savedProduct = [
        {
          image: fridge,
          name: "Standard washing ",
          rating: 4,
          price: 600,
          url: "fidge",
          qty: 1,
        },
      ];
      localStorage.setItem("timbo-product", JSON.stringify(savedProduct));
      toast("item addes");
    } else {
      const prevProduct = localStorage.getItem("timbo-product");
      const checkIfProductIsincart = JSON.parse(prevProduct).filter(
        (product) => product.url === "fidge"
      );
      if (checkIfProductIsincart.length === 1) {
      } else {
        savedProduct = [
          ...savedProduct,
          {
            image: fridge,
            name: "Standard washing ",
            rating: 4,
            price: 600,
            url: "fidge",
            qty: 1,
          },
        ];
        localStorage.setItem("timbo-product", JSON.stringify(savedProduct));
      }
    }
  };
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
                  clickHandler={() => {
                    addToCart();
                  }}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.second_flex}>
          <div className={style.card_list}>
            {product.map((item, index) => (
              <Product
                {...item}
                key={index}
                updateCartCount={updateCartCount}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellersProduct;
