import Button from "../Button";
import FavoriteBtn from "../FavouriteBtn";
import Rating from "../Rating";
import Typography from "../Typograhy";
import style from "./index.module.css";
import toast from "react-hot-toast";
import Toast from "../Toast";
const Product = ({ image, name, rating, price, url }) => {
  const addToCart = () => {
    let savedProduct = JSON.parse(localStorage.getItem("timbo-product"));
    if (!savedProduct) {
      savedProduct = [{ image, name, rating, price, url, qty: 1 }];
      localStorage.setItem("timbo-product", JSON.stringify(savedProduct));
      toast("item addes");
    } else {
      const prevProduct = localStorage.getItem("timbo-product");
      const checkIfProductIsincart = JSON.parse(prevProduct).filter(
        (product) => product.url === url
      );
      if (checkIfProductIsincart.length === 1) {
      } else {
        savedProduct = [
          ...savedProduct,
          { image, name, rating, price, url, qty: 1 },
        ];
        localStorage.setItem("timbo-product", JSON.stringify(savedProduct));
      }
    }
  };
  return (
    <div className={style.container}>
      <div className={style.image_container}>
        <img src={image} className={style.image} />
      </div>
      <div>
        <div className={style.product_info}>
          <Rating rating={rating} />
          <p className={style.name}>{name}</p>
          <Typography
            fontWeight="500"
            size="14px"
            align="left"
            marginHorizontal="0"
            marginVertical="0"
          >
            {price}
          </Typography>
          <div className={style.btn_container}>
            <Button
              textSize="12px"
              fontWeight="300"
              verticalPadding="0px"
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
  );
};

export default Product;
