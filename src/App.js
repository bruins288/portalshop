import React from "react";

import Header from "./components/Header.jsx";
import Types from "./components/Types.jsx";
import Sort from "./components/Sort.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

import "./App.scss";
import ProductsAPI from "./dal/ProductsAPI.js";

function App() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      let response = await ProductsAPI.getProducts();
      setProducts(response.data);
    })();
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="content__top">
          <Types />
          <Sort />
        </div>
        <div className="content__title">
          <h1>В наличие</h1>
        </div>
        <div className="content__items">
          {products.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
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
      <Footer />
    </div>
  );
}
export default App;
