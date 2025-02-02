import style from "./index.module.css";
import car from "../../../src/assets/svg/car.svg";
import card from "../../../src/assets/svg/card.svg";
import tone from "../../../src/assets/svg/tone.svg";
import Typography from "../Typograhy";
const ShippingCards = ({ icon, text, header }) => {
  return (
    <div className={style.container}>
      <div className={style.card_list}>
        <div className={style.item1}>
          <div className={style.shippingCard}>
            <img src={car} className={style.image} />
            <h5>Free shipping</h5>
            <p>Enjoy free delivery on all order from our company.</p>
          </div>
        </div>

        <div className={style.item2}>
          {" "}
          <div className={style.shippingCard}>
            <img src={card} className={style.image} />
            <h5>Secure payment</h5>
            <p>Benefit from secure payment option with our company.</p>
          </div>
        </div>
        <div className={style.last}>
          <div className={`${style.shippingCard} `}>
            <img src={tone} className={style.image} />
            <h5>24 hour support</h5>
            <p>we offer 24 hour customer supportto our customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingCards;
