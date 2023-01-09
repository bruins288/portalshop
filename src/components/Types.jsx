import React from "react";

const types = [
  "Все",
  "Мясные",
  "Барбекю",
  "Острые",
  "Экзотические",
  "Закрытые",
];

function Types({ id, clickType }) {
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
