import Typography from "../Typograhy";
import CategoryCard from "./CategotyCard";
import style from "./index.module.css";
const Category = () => {
  return (
    <div className={style.section}>
      <Typography
        fontWeight="600"
        size="30px"
        lineHeight="40px"
        align="left"
        marginVertical="20px"
        marginHorizontal="30px"
      >
        Browse by category
      </Typography>
      <div className={style.card_list}>
        <CategoryCard cardText={"Headphone"} />
        <CategoryCard cardText={"Headphone"} />
        <CategoryCard cardText={"Headphone"} />
        <CategoryCard cardText={"Headphone"} />
        <CategoryCard cardText={"Headphone"} />
        <CategoryCard cardText={"Headphone"} />
        <CategoryCard cardText={"Headphone"} />
        <CategoryCard cardText={"Headphone"} />
        <CategoryCard cardText={"Headphone"} />
        <CategoryCard cardText={"Headphone"} />
      </div>
    </div>
  );
};

export default Category;
