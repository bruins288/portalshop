import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSelectedSort } from "../redux/slices/filterSlice.js";

const list = [
  { name: "популярности", sortedType: "rating" },
  { name: "цене", sortedType: "price" },
  { name: "алфавиту", sortedType: "title" },
];

function Sort() {
  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false);
  const selected = useSelector((state) => state.filter.selectedSort);
  const dispatch = useDispatch();

  const handleToggleSort = (sortedType) => {
    dispatch(setSelectedSort(sortedType));
    setIsVisiblePopup(!isVisiblePopup);
  };

  return (
    <div className="sort">
      <div
        className="sort__label"
        onClick={() => setIsVisiblePopup(!isVisiblePopup)}
      >
        <svg viewBox="0 0 19 17" fill="none" width={20} height={20}>
          <path
            d="M6.5 12C6.22386 12 6 11.7761 6 11.5V1C6 0.447715 5.55228 0 5 0C4.44772 0 4 0.447715 4 1V11.5C4 11.7761 3.77614 12 3.5 12H1.21524C0.768646 12 0.546084 12.5409 0.863367 12.8552L4.33713 16.2962C4.72951 16.6849 5.36269 16.6819 5.75136 16.2895L9.15625 12.8519C9.46891 12.5362 9.24531 12 8.80101 12H6.5Z"
            fill="#6A6A76"
          ></path>
        </svg>
        <b>Сортировка по:</b>
        <span>{list.find((item) => item.sortedType === selected).name}</span>
      </div>
      {isVisiblePopup && (
        <div className="sort__popup">
          <ul>
            {list.map((item, index) => (
              <li
                key={index}
                className={selected === item.sortedType ? "active" : ""}
                onClick={() => handleToggleSort(item.sortedType)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
