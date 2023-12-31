import styles from "./Loader.module.scss";

const Loader = ({ isLoading }) => {
  if (!isLoading) return;
  return <img className={styles.loader} alt="????" src={`${process.env.PUBLIC_URL}/images/loader.png`} />;
};

export default Loader;
