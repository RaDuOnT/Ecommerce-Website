import {
  CardWrapper,
  CardImage,
  CardPriceAndShop,
  CardPrice,
  CardTextTitle,
  AddToCartBtn,
  CardRating,
} from "./cardStyles";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

type CardType = {
  title: string;
  price: number;
  imgUrl: string;
  addToCart: string;
  rating: number;
};

export const Card = ({ title, price, imgUrl, rating }: CardType) => {
  return (
    <CardWrapper>
      {/* <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to="/parfum/asd"
      > */}
        <CardImage background={imgUrl} />
      {/* </Link> */}
      {/* <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to="/parfum/asd"
      > */}
        <CardTextTitle>{title}</CardTextTitle>
      {/* </Link> */}

      <CardRating>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <FaStar
              key={i}
              style={{
                color: ratingValue <= rating ? "#ffc107" : "#e4e5e9",
              }}
            />
          );
        })}
      </CardRating>
      <CardPriceAndShop>
        <CardPrice>{price} RON</CardPrice>
        <AddToCartBtn />
      </CardPriceAndShop>
    </CardWrapper>
  );
};
