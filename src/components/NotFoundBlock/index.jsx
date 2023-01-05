import React from "react";

import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.container}>
      <h1>Ничего не найдено!</h1>
    </div>
  );
}

export default NotFoundBlock;