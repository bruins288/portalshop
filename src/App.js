import React from "react";

import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header__logo">
            <img src="img/logo.png" alt="logo" width={70} height={70} />
            <div className="header__name">
              <h1>React pizza</h1>
              <p>интернет магазин</p>
            </div>
          </div>
          <div className="header__cart">
            <span>520 ₽</span>
            <button>
              <svg width="24" height="21" fill="none" viewBox="0 0 24 21">
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M 19.5 0.471 L 17.257 5.01 L 6.678 5.006 L 4.43 0.46 a 1 1 0 0 0 -1.682 1.08 l 1.553 3.464 l -3.33 -0.002 a 0.97 0.97 0 0 0 -0.01 1.941 h 0.04 l 1.69 10.122 c 0.12 1.68 1.635 2.936 3.398 2.936 h 11.312 c 1.767 0 3.784 -1.262 3.898 -2.946 L 23 6.95 h 0.031 a 0.969 0.969 0 0 0 0 -1.937 l -3.358 -0.002 l 1.54 -3.44 A 1.017 1.017 0 1 0 19.5 0.47 Z m -2.099 17.531 h -1.405 l 0.002 -2 h 3.426 l -0.097 0.615 l -0.053 0.338 c -0.052 0.555 -1.085 1.047 -1.873 1.047 Z m -12.684 -1.04 l -0.001 -0.01 l -0.207 -0.95 h 3.49 l -0.009 2 h -1.9 c -0.785 0 -1.318 -0.489 -1.373 -1.04 Z m 9.279 -9.96 l 0.003 2.006 h -4 V 7.002 h 3.997 Z m -3.997 7 l -0.009 -2.994 H 14 v 2.994 h -4 Z m -0.009 2 l 0.005 2 h 4 l 0.004 -2 H 9.99 Z M 8 9.002 l -4.623 0.006 l -0.341 -2.002 l 4.964 -0.004 v 2 Z m 0 5 H 4.185 L 3.7 11.008 l 4.299 -0.006 v 3 Z m 13 -7 l -0.364 2.006 h -4.64 V 7.002 H 21 Z m -0.708 4.006 l -0.515 2.996 L 16 14.002 l -0.003 -2.994 h 4.295 Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>3</span>
            </button>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="content__top">
          <div className="types">
            <menu>
              <li className="active">Все</li>
              <li>Мясные</li>
              <li>Барбекю</li>
              <li>Острые</li>
              <li>Экзотические</li>
              <li>Закрытые</li>
            </menu>
          </div>
          <div className="sort">
            <div className="sort__label">
              <svg viewBox="0 0 19 17" fill="none" width={20} height={20}>
                <path
                  d="M6.5 12C6.22386 12 6 11.7761 6 11.5V1C6 0.447715 5.55228 0 5 0C4.44772 0 4 0.447715 4 1V11.5C4 11.7761 3.77614 12 3.5 12H1.21524C0.768646 12 0.546084 12.5409 0.863367 12.8552L4.33713 16.2962C4.72951 16.6849 5.36269 16.6819 5.75136 16.2895L9.15625 12.8519C9.46891 12.5362 9.24531 12 8.80101 12H6.5Z"
                  fill="#6A6A76"
                ></path>
              </svg>
              <b>Сортировка по:</b>
              <span>популярности</span>
            </div>
            <div className="sort__popup">
              <ul>
                <li className="active">популярности</li>
                <li>цене</li>
                <li>алфавиту</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content__title">
          <h1>В наличие</h1>
        </div>
        <div className="content__items">
          <div className="pizza-card">
            <img
              className="pizza-card__img"
              src="img/products/1.png"
              alt="pizza"
            />
            <div className="pizza-card__title">
              <h4>Мясная</h4>
              <p>
                Ветчина, Курица, Охотничьи колбаски, Пепперони, Сыр Моцарелла,
                Томатный соус.
              </p>
            </div>
            <div className="pizza-card__selector">
              <ul>
                <li className="active">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="pizza-card__bottom">
              <button className="button button--outline button--add">
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
                <i>2</i>
              </button>
              <div className="pizza-card__price">от 395 ₽</div>
            </div>
          </div>
          <div className="pizza-card">
            <img
              className="pizza-card__img"
              src="img/products/1.png"
              alt="pizza"
            />
            <div className="pizza-card__title">
              <h4>Мясная</h4>
              <p>
                Ветчина, Курица, Охотничьи колбаски, Пепперони, Сыр Моцарелла,
                Томатный соус.
              </p>
            </div>
            <div className="pizza-card__selector">
              <ul>
                <li className="active">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="pizza-card__bottom">
              <button className="button button--outline button--add">
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
                <i>2</i>
              </button>
              <div className="pizza-card__price">от 395 ₽</div>
            </div>
          </div>
          <div className="pizza-card">
            <img
              className="pizza-card__img"
              src="img/products/1.png"
              alt="pizza"
            />
            <div className="pizza-card__title">
              <h4>Мясная</h4>
              <p>
                Ветчина, Курица, Охотничьи колбаски, Пепперони, Сыр Моцарелла,
                Томатный соус.
              </p>
            </div>
            <div className="pizza-card__selector">
              <ul>
                <li className="active">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="pizza-card__bottom">
              <button className="button button--outline button--add">
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
                <i>2</i>
              </button>
              <div className="pizza-card__price">от 395 ₽</div>
            </div>
          </div>
          <div className="pizza-card">
            <img
              className="pizza-card__img"
              src="img/products/1.png"
              alt="pizza"
            />
            <div className="pizza-card__title">
              <h4>Мясная</h4>
              <p>
                Ветчина, Курица, Охотничьи колбаски, Пепперони, Сыр Моцарелла,
                Томатный соус.
              </p>
            </div>
            <div className="pizza-card__selector">
              <ul>
                <li className="active">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="pizza-card__bottom">
              <button className="button button--outline button--add">
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
                <i>2</i>
              </button>
              <div className="pizza-card__price">от 395 ₽</div>
            </div>
          </div>
          <div className="pizza-card">
            <img
              className="pizza-card__img"
              src="img/products/1.png"
              alt="pizza"
            />
            <div className="pizza-card__title">
              <h4>Мясная</h4>
              <p>
                Ветчина, Курица, Охотничьи колбаски, Пепперони, Сыр Моцарелла,
                Томатный соус.
              </p>
            </div>
            <div className="pizza-card__selector">
              <ul>
                <li className="active">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="pizza-card__bottom">
              <button className="button button--outline button--add">
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
                <i>2</i>
              </button>
              <div className="pizza-card__price">от 395 ₽</div>
            </div>
          </div>
          <div className="pizza-card">
            <img
              className="pizza-card__img"
              src="img/products/1.png"
              alt="pizza"
            />
            <div className="pizza-card__title">
              <h4>Мясная</h4>
              <p>
                Ветчина, Курица, Охотничьи колбаски, Пепперони, Сыр Моцарелла,
                Томатный соус.
              </p>
            </div>
            <div className="pizza-card__selector">
              <ul>
                <li className="active">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="pizza-card__bottom">
              <button className="button button--outline button--add">
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
                <i>2</i>
              </button>
              <div className="pizza-card__price">от 395 ₽</div>
            </div>
          </div>
          <div className="pizza-card">
            <img
              className="pizza-card__img"
              src="img/products/1.png"
              alt="pizza"
            />
            <div className="pizza-card__title">
              <h4>Мясная</h4>
              <p>
                Ветчина, Курица, Охотничьи колбаски, Пепперони, Сыр Моцарелла,
                Томатный соус.
              </p>
            </div>
            <div className="pizza-card__selector">
              <ul>
                <li className="active">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="pizza-card__bottom">
              <button className="button button--outline button--add">
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
                <i>2</i>
              </button>
              <div className="pizza-card__price">от 395 ₽</div>
            </div>
          </div>
          <div className="pizza-card">
            <img
              className="pizza-card__img"
              src="img/products/1.png"
              alt="pizza"
            />
            <div className="pizza-card__title">
              <h4>Мясная</h4>
              <p>
                Ветчина, Курица, Охотничьи колбаски, Пепперони, Сыр Моцарелла,
                Томатный соус.
              </p>
            </div>
            <div className="pizza-card__selector">
              <ul>
                <li className="active">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="pizza-card__bottom">
              <button className="button button--outline button--add">
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
                <i>2</i>
              </button>
              <div className="pizza-card__price">от 395 ₽</div>
            </div>
          </div>
          <div className="pizza-card">
            <img
              className="pizza-card__img"
              src="img/products/1.png"
              alt="pizza"
            />
            <div className="pizza-card__title">
              <h4>Мясная</h4>
              <p>
                Ветчина, Курица, Охотничьи колбаски, Пепперони, Сыр Моцарелла,
                Томатный соус.
              </p>
            </div>
            <div className="pizza-card__selector">
              <ul>
                <li className="active">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="pizza-card__bottom">
              <button className="button button--outline button--add">
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
                <i>2</i>
              </button>
              <div className="pizza-card__price">от 395 ₽</div>
            </div>
          </div>
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
      <footer className="footer">
        <div>
          <p>© 2021 React Pizza. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
export default App;
