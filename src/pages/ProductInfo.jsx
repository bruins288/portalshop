import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Skeleton from "../components/Card/Skeleton.tsx";
import Card from "../components/Card";
import {
  fetchProductById,
  selectorProduct,
} from "../redux/slices/productSlice.js";
import { LOADING, SUCCESS, ERROR } from "../constants.js";

function ProductInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { item, status } = useSelector(selectorProduct);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);

  return (
    <div className="content__info">
      {status === ERROR ? (
        <h2 onClick={() => navigate("/")}>
          Ошибка загрузки данных или товар не найден...
        </h2>
      ) : status === LOADING ? (
        <Skeleton />
      ) : (
        status === SUCCESS && <Card {...item} />
      )}
    </div>
  );
}

export default ProductInfo;
