import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Skeleton from "../components/Card/Skeleton";
import Card from "../components/Card";
import {
  fetchProductById,
  selectorProduct,
} from "../redux/slices/productSlice";
import { useAppDispatch } from "../redux/store";
import { Status } from "../redux/slices/productSlice";

function ProductInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { item, status } = useSelector(selectorProduct);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProductById(Number(id)));
  }, [id, dispatch]);

  return (
    <div className="content__info">
      {status === Status.ERROR ? (
        <h2 onClick={() => navigate("/")}>
          Ошибка загрузки данных или товар не найден...
        </h2>
      ) : status === Status.LOADING ? (
        <Skeleton />
      ) : (
        status === Status.SUCCESS && <Card {...item} />
      )}
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
    </div>
  );
}

export default ProductInfo;
