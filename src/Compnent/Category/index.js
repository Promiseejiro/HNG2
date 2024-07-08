import Typography from "../Typograhy";
import CategoryCard from "./CategotyCard";
import style from "./index.module.css";
import headPhone from "../../assets/images/headphone.png";
import earpod from "../../assets/images/earpod.png";
import categoryWatch from "../../assets/images/categoryWatch.png";
import camera from "../../assets/images/3redcamera.png";
import phone from "../../assets/images/phone.jpg";
const Category = () => {
  const category = [
    {
      image: headPhone,
      name: "Headphones",
    },
    {
      image: earpod,
      name: "Ear pods",
    },
    {
      image: categoryWatch,
      name: "Watches",
    },
    {
      image: camera,
      name: "Cameras",
    },
    {
      image: phone,
      name: "Phones",
    },
  ];
  return (
    <div className={style.section} >
      <Typography
        fontWeight="600"
        size="25px"
        lineHeight="40px"
        align="left"
        marginVertical="20px"
        marginHorizontal="30px"
      >
        Browse by category
      </Typography>
      <div className={style.card_list}>
        {category.map((item) => (
          <CategoryCard cardText={item.name} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Category;
