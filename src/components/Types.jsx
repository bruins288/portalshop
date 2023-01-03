import React from "react";

function Types() {
  const [activeType, setActiveType] = React.useState(0);
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
            className={activeType === index ? "active" : ""}
            onClick={() => setActiveType(index)}
          >
            {element}
          </li>
        ))}
      </menu>
    </div>
  );
}

export default Types;
