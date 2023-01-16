import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.container}>
      <h1>Ничего не найдено!</h1>
      <p>К сожалению данная страница отсутствует</p>
    </div>
  );
}

export default NotFoundBlock;
