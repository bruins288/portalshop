import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    </div>
  );
}

export default ProductInfo;
