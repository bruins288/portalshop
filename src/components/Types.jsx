import React from "react";

function Types({ id, clickType }) {
  const types = [
    "Все",
    "Мясные",
    "Барбекю",
    "Острые",
    "Экзотические",
    "Закрытые",
  ];

  return (
    <div className="types">
      <menu>
        {types.map((element, index) => (
          <li
            key={index}
            className={id === index ? "active" : ""}
            onClick={() => clickType(index)}
          >
            {element}
          </li>
        ))}
      </menu>
    </div>
  );
}

export default Types;
