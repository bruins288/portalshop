import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img src="img/logo.png" alt="logo" width={70} height={70} />
            <div className="header__name">
              <h1>React pizza</h1>
              <p>интернет магазин</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to="/Cart">
            <span>520 ₽</span>
            <button className="button-header">
              <svg width="24" height="21" fill="none" viewBox="0 0 24 21">
                <path
                  fill="none"
                  fillRule="evenodd"
                  d="M 19.5 0.471 L 17.257 5.01 L 6.678 5.006 L 4.43 0.46 a 1 1 0 0 0 -1.682 1.08 l 1.553 3.464 l -3.33 -0.002 a 0.97 0.97 0 0 0 -0.01 1.941 h 0.04 l 1.69 10.122 c 0.12 1.68 1.635 2.936 3.398 2.936 h 11.312 c 1.767 0 3.784 -1.262 3.898 -2.946 L 23 6.95 h 0.031 a 0.969 0.969 0 0 0 0 -1.937 l -3.358 -0.002 l 1.54 -3.44 A 1.017 1.017 0 1 0 19.5 0.47 Z m -2.099 17.531 h -1.405 l 0.002 -2 h 3.426 l -0.097 0.615 l -0.053 0.338 c -0.052 0.555 -1.085 1.047 -1.873 1.047 Z m -12.684 -1.04 l -0.001 -0.01 l -0.207 -0.95 h 3.49 l -0.009 2 h -1.9 c -0.785 0 -1.318 -0.489 -1.373 -1.04 Z m 9.279 -9.96 l 0.003 2.006 h -4 V 7.002 h 3.997 Z m -3.997 7 l -0.009 -2.994 H 14 v 2.994 h -4 Z m -0.009 2 l 0.005 2 h 4 l 0.004 -2 H 9.99 Z M 8 9.002 l -4.623 0.006 l -0.341 -2.002 l 4.964 -0.004 v 2 Z m 0 5 H 4.185 L 3.7 11.008 l 4.299 -0.006 v 3 Z m 13 -7 l -0.364 2.006 h -4.64 V 7.002 H 21 Z m -0.708 4.006 l -0.515 2.996 L 16 14.002 l -0.003 -2.994 h 4.295 Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>3</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
