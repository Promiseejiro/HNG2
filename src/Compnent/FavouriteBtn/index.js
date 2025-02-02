import React, { useState } from "react";
import { MdFavorite } from "react-icons/md";

import style from "./index.module.css";

const FavoriteBtn = ({ addToFavourite }) => {
  const [clicked, setClicked] = useState(false);

  const clickedHandler = () => {
    setClicked(!clicked);
    addToFavourite();
  };
  return (
    <button className={style.favorite} onClick={clickedHandler}>
      <svg
        width="19"
        height="17"
        viewBox="0 0 19 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.8349 5.42243C18.8349 11.1874 10.287 15.8538 9.92301 16.0465C9.82706 16.0981 9.71982 16.1251 9.61087 16.1251C9.50193 16.1251 9.39468 16.0981 9.29874 16.0465C8.93472 15.8538 0.386871 11.1874 0.386871 5.42243C0.388397 4.06866 0.926854 2.77078 1.88411 1.81352C2.84137 0.856267 4.13925 0.31781 5.49302 0.316284C7.19369 0.316284 8.68271 1.04762 9.61087 2.2838C10.539 1.04762 12.0281 0.316284 13.7287 0.316284C15.0825 0.31781 16.3804 0.856267 17.3376 1.81352C18.2949 2.77078 18.8333 4.06866 18.8349 5.42243Z"
          fill="#DE4673"
        />
      </svg>
    </button>
  );
};

export default FavoriteBtn;
