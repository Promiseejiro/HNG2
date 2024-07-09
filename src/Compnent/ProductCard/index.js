import Button from "../Button";
import FavoriteBtn from "../FavouriteBtn";
import Rating from "../Rating";
import Typography from "../Typograhy";
import style from "./index.module.css";
import toast from "react-hot-toast";
import Toast from "../Toast";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { useState } from "react";
const Product = ({ image, name, rating, price, url, updateCartCount }) => {
  const [liked, setLiked] = useState(false);
  const addToCart = () => {
    let savedProduct = JSON.parse(localStorage.getItem("timbo-product"));
    if (!savedProduct) {
      savedProduct = [{ image, name, rating, price, url, qty: 1 }];
      localStorage.setItem("timbo-product", JSON.stringify(savedProduct));
      updateCartCount(savedProduct.length);
      toast(<Toast text={"Item Added to cart"} type="success" />);
    } else {
      const prevProduct = localStorage.getItem("timbo-product");
      const checkIfProductIsincart = JSON.parse(prevProduct).filter(
        (product) => product.url === url
      );
      if (checkIfProductIsincart.length === 1) {
        toast(<Toast text={"Item Already in cart"} type="success" />);
      } else {
        savedProduct = [
          ...savedProduct,
          { image, name, rating, price, url, qty: 1 },
        ];
        toast(<Toast text={"Item Added to cart"} type="success" />);
        updateCartCount(savedProduct.length);
        localStorage.setItem("timbo-product", JSON.stringify(savedProduct));
      }
    }
  };
  return (
    <div className={style.container}>
      <MdFavorite
        style={{ color: liked ? "red" : "" }}
        className={style.like_btn}
        onClick={() => {
          setLiked(true);
        }}
      />
      <Link to={`/${url}`}>
        <div className={style.image_container}>
          <img src={image} className={style.image} />
        </div>
        <div className={style.product_info}>
          <Rating rating={rating} />
          <p className={style.name}>{name}</p>
          <p className={style.price}>${price}</p>
        </div>
      </Link>
      <div className={style.btn_container}>
        <Button
          textSize="12px"
          fontWeight="300"
          verticalPadding="5px"
          clickHandler={() => {
            addToCart();
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
