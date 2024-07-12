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
const FeaturedProduct = ({ updateCartCount }) => {
  const product = [
    {
    
      name: "12 pro smart watch",
image:"https://images.unsplash.com/photo-1605460375648-278bcbd579a6?fit=crop&w=500&q=80    name: "Luxury Smart Watch",
    des: "Stay connected in style with our luxury smart watch.",
    rating: 4.8,
    price: 500,
    url: "luxurySmartWatch.png",
  },
  {
    image: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6?fit=crop&w=500&q=80",
    name: "Smart Blender",
    des: "Blend smoothies and more with our intelligent smart blender.",
    rating: 4.7,
    price: 120,
    url: "smartBlender.png",
  },
  {
    image: "https://images.unsplash.com/photo-1596642271622-9c32b670c06f?fit=crop&w=500&q=80",
    name: "Smart Coffee Maker",
    des: "Brew perfect coffee every time with our smart coffee maker.",
    rating: 4.8,
    price: 200,
    url: "coffeeMaker.png",
  },
  {
    image: "https://images.unsplash.com/photo-1604917877930-01512a8c36e5?fit=crop&w=500&q=80",
    name: "Smart Washing Machine",
    des: "Make laundry easy with our energy-efficient smart washing machine.",
    rating: 4.9,
    price: 800,
    url: "washingMachine.png",
  },
  {
    image: "https://images.unsplash.com/photo-1605580839768-e1611e1a88c9?fit=crop&w=500&q=80",
    name: "Smart Refrigerator",
    des: "Keep your food fresh and organized with our smart refrigerator.",
    rating: 4.8,
    price: 1500,
    url: "refrigerator.png",
  },
  {
    image: "https://images.unsplash.com/photo-1614436167604-d7e8b5a12b63?fit=crop&w=500&q=80",
    name: "Robot Vacuum Cleaner",
    des: "Enjoy a clean home with minimal effort using our robot vacuum cleaner.",
    rating: 4.7,
    price: 350,
    url: "vacuumCleaner.png",
  },
  {
    image: "https://images.unsplash.com/photo-1579424916308-f5c8de1f9b3f?fit=crop&w=500&q=80",
    name: "Smart Oven",
    des: "Cook meals to perfection with our smart oven.",
    rating: 4.8,
    price: 900,
    url: "smartOven.png",
  }
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
    </div>
  );
};

export default FeaturedProduct;
