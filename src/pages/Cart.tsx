import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../components/CartItem";
import CartEmpty from "../components/CartEmpty";
import { clearProducts, selectorCart } from "../redux/slices/cartSlice";

function Cart() {
  const { totalPrice, totalCount, products } = useSelector(selectorCart);
  const dispatch = useDispatch();

  return (
    <div className="content__cart">
      {products.length ? (
        <div className="cart">
          <div className="cart__top">
            <h2 className="cart__title">
              <svg width="24" height="21" fill="none" viewBox="0 0 24 21">
                <path
                  fill="rgb(227, 24, 54)"
                  fillRule="evenodd"
                  d="M 19.5 0.471 L 17.257 5.01 L 6.678 5.006 L 4.43 0.46 a 1 1 0 0 0 -1.682 1.08 l 1.553 3.464 l -3.33 -0.002 a 0.97 0.97 0 0 0 -0.01 1.941 h 0.04 l 1.69 10.122 c 0.12 1.68 1.635 2.936 3.398 2.936 h 11.312 c 1.767 0 3.784 -1.262 3.898 -2.946 L 23 6.95 h 0.031 a 0.969 0.969 0 0 0 0 -1.937 l -3.358 -0.002 l 1.54 -3.44 A 1.017 1.017 0 1 0 19.5 0.47 Z m -2.099 17.531 h -1.405 l 0.002 -2 h 3.426 l -0.097 0.615 l -0.053 0.338 c -0.052 0.555 -1.085 1.047 -1.873 1.047 Z m -12.684 -1.04 l -0.001 -0.01 l -0.207 -0.95 h 3.49 l -0.009 2 h -1.9 c -0.785 0 -1.318 -0.489 -1.373 -1.04 Z m 9.279 -9.96 l 0.003 2.006 h -4 V 7.002 h 3.997 Z m -3.997 7 l -0.009 -2.994 H 14 v 2.994 h -4 Z m -0.009 2 l 0.005 2 h 4 l 0.004 -2 H 9.99 Z M 8 9.002 l -4.623 0.006 l -0.341 -2.002 l 4.964 -0.004 v 2 Z m 0 5 H 4.185 L 3.7 11.008 l 4.299 -0.006 v 3 Z m 13 -7 l -0.364 2.006 h -4.64 V 7.002 H 21 Z m -0.708 4.006 l -0.515 2.996 L 16 14.002 l -0.003 -2.994 h 4.295 Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Корзина
            </h2>
            <div
              className="cart__clear"
              onClick={() => dispatch(clearProducts())}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5H4.16667H17.5"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8.33337 9.16667V14.1667"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M11.6666 9.16667V14.1667"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className="cart__container">
            {products.length ? (
              products.map(
                (product: any, index: number) =>
                  product.count > 0 && <CartItem key={index} {...product} />
              )
            ) : (
              <h2>Корзина пуста</h2>
            )}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Всего пицц: <b>{totalCount} шт.</b>
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} ₽</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link to="/">
                <button className="button button--back">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13L1 6.93015L6.86175 1"
                      stroke="#D3D3D3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Вернуться назад</span>
                </button>
              </Link>
              <button className="button button--pay">
                <span>Оплатить сейчас</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}

export default Cart;
