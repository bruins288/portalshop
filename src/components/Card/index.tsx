import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addProduct } from "../../redux/slices/cartSlice";

const methodNames = ["тонкое", "традиционное"];

const Card: React.FC<CardPropsType> = ({
  id,
  imageUrl,
  title,
  description,
  price,
  methods,
  sizes,
}) => {
  const [activeMethod, setActiveMethod] = React.useState<number>(0);
  const [activeSize, setActiveSize] = React.useState<number>(0);

  const dispatch = useDispatch();
  const addedToCart = useSelector((state: any) =>
    state.cart.products.reduce((sum: number, item: any) => {
      if (item.id === id) {
        sum += item.count;
      }
      return sum;
    }, 0)
  );

  const handleClickAdd = () => {
    let product: CartItemType = {
      id,
      imageUrl,
      title,
      price,
      method: methodNames[activeMethod],
      size: sizes[activeSize],
      count: 0,
      add: 1,
    };
    dispatch(addProduct(product));
  };

  return (
    <div className="pizza-card">
      <Link to={`/Product/${id}`}>
        <img className="pizza-card__img" src={imageUrl} alt="pizza" />
      </Link>
      <div className="pizza-card__title">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="pizza-card__selector">
        <ul>
          {methods &&
            methods.map((method) => (
              <li
                key={method}
                className={
                  activeMethod === method && methods.length > 1 ? "active" : ""
                }
                onClick={() => setActiveMethod(method)}
              >
                {methodNames[method]}
              </li>
            ))}
        </ul>
        <ul>
          {sizes &&
            sizes.map((size, index) => (
              <li
                key={index}
                className={
                  activeSize === index && sizes.length > 1 ? "active" : ""
                }
                onClick={() => setActiveSize(index)}
              >
                {size} см.
              </li>
            ))}
        </ul>
      </div>
      <div className="pizza-card__bottom">
        <button
          className="button button--outline button--add"
          onClick={handleClickAdd}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedToCart > 0 && <i>{addedToCart}</i>}
        </button>
        <div className="pizza-card__price">от {price} ₽</div>
      </div>
    </div>
  );
};

export default Card;
