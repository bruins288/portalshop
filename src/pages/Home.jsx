import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Types from "../components/Types.jsx";
import Sort from "../components/Sort.jsx";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton.jsx";
import Pagination from "../components/Pagination/index.jsx";

import ProductsAPI from "../dal/ProductsAPI.js";
import { SearchContext } from "../App.js";
import { setCurrentPage, setTypeId } from "../redux/slices/filterSlice.js";

function Home() {
  const [products, setProducts] = React.useState([]);
  const [isLoading, SetIsLoading] = React.useState(false);
  const { typeId, selectedSort, currentPage } = useSelector(
    (state) => state.filter
  );
  const { searchValue } = React.useContext(SearchContext);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let response = null;

    try {
      SetIsLoading(true);
      (async () => {
        if (typeId) {
          response = await ProductsAPI.getProductsByTypeId(
            typeId,
            selectedSort,
            searchValue,
            currentPage
          );
        } else {
          response = await ProductsAPI.getProducts(
            selectedSort,
            searchValue,
            currentPage
          );
        }

        setProducts(response.data);
        SetIsLoading(false);
      })();
    } catch (error) {
      window.alert("Ошибка загрузки данных.");
      console.log(error.message);
    } finally {
      window.scrollTo(0, 0);
    }
  }, [typeId, selectedSort, searchValue, currentPage]);

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
        </div>
        <div className="content__items">
          {isLoading ? (
            [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          ) : products.length ? (
            products.map((item) => <Card key={item.id} {...item} />)
          ) : (
            <h3>Пицца не найдена</h3>
          )}
        </div>
        <Pagination changePage={onChangePage} />
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
