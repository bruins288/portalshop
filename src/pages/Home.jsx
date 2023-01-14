import React from "react";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import Types from "../components/Types.jsx";
import Sort from "../components/Sort.jsx";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton.jsx";
import Pagination from "../components/Pagination/index.jsx";

import {
  setCurrentPage,
  setTypeId,
  setFilters,
} from "../redux/slices/filtersSlice.js";
import { fetchProducts } from "../redux/slices/productSlice.js";
import { LOADING, SUCCESS, ERROR } from "../constants.js";

function Home() {
  const { items, status } = useSelector((state) => state.product);
  const { typeId, selectedSort, currentPage, searchValue } = useSelector(
    (state) => state.filters
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFiltered = React.useRef(false);
  const isMounted = React.useRef(false);

  //Если был первый рендер, проверяем параметры и сохраняем в redux
  React.useEffect(() => {
    if (window.location.search) {
      let params = qs.parse(window.location.search.substring(1));
      dispatch(setFilters({ ...params }));
      isFiltered.current = true;
    }
  }, [dispatch]);

  //Если был первый рендер, то запрашиваем строку с параметрами, в противном случае
  //запрашиваем все с нуля
  React.useEffect(() => {
    if (!isFiltered.current) {
      dispatch(
        fetchProducts({ typeId, selectedSort, searchValue, currentPage })
      );
    }
    isFiltered.current = false;
    window.scrollTo(0, 0);
  }, [typeId, selectedSort, searchValue, currentPage, dispatch]);

  //Если в первый раз загрузилось приложение, то параметры не отображены
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        selectedSort,
        typeId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [typeId, selectedSort, currentPage, navigate]);

  // const findProducts = products.filter((item) =>
  //   item.title.toLowerCase().includes(searchValue.toLowerCase())
  // ); для статичных не меняющихся массивов

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <React.Fragment>
      <React.Fragment>
        <div className="content__top">
          <Types id={typeId} clickType={(id) => dispatch(setTypeId(id))} />
          <Sort />
        </div>
        <div className="content__title">
          <h1>В наличие</h1>
          {status === ERROR && <h2>Ошибка загрузки данных</h2>}
        </div>
        <div className="content__items">
          {status === LOADING ? (
            [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          ) : status === SUCCESS && items.length > 0 ? (
            items.map((item) => <Card key={item.id} {...item} />)
          ) : (
            <h3>Пицца не найдена</h3>
          )}
        </div>
        <Pagination selectedPage={currentPage} changePage={onChangePage} />
      </React.Fragment>
      <article className="about">
        <div>
          <h1>Пицца</h1>
          <p>
            Традиционное итальянское блюдо в виде круглой дрожжевой лепёшки,
            выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и
            зачастую других ингредиентов, таких как мясо, овощи, грибы и других
            продуктов.
          </p>
          <h2>Приготовление</h2>
          <p>
            Мы знаем, что секрет настоящей пиццы в правильном тесте, хорошем
            соусе, сочной начинке и тянущемся сыре. Тесто должно быть
            выдержанным, чтобы сохранять эластичность даже после остывания.
            Выпекать его надо быстро и при высокой температуре, чтобы оно не
            пересохло, но при этом бортики подрумянились и обзавелись аппетитной
            корочкой. Соус должен давать сочность, начинка — наполнять вкусом, а
            сыр — подчеркивать и объединять все ингредиенты. Тесто готовится из
            муки высшего сорта, выпекается при температуре 245°С в течение 8
            минут. Для начинки используются свежие фермерские овощи, сыр
            моцарелла из парного молока, мясные деликатесы проверенных
            производителей. Перед тем, как отправиться к клиенту, каждое блюдо
            проходит контроль качества.
          </p>
          <h2>Меню для всех</h2>
          <p>
            В меню есть мясная, овощная, грибная, острая, барбекю, экзотическая
            пицца. Отдельного внимания достойны сочные закрытые пицца-паи с
            сырной корочкой. А те, кто не определился, какой вкус хочет выбрать,
            могут заказать пиццу с двумя или с четырьмя начинками. И не
            забывайте, что мы регулярно проводим акции, благодаря которым вы
            сможете выгодно заказать доставку пиццы.
          </p>
        </div>
      </article>
    </React.Fragment>
  );
}

export default Home;
