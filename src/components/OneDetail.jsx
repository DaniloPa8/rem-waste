import styles from "styles/components/OneDetail.module.css";

export const OneDetail = ({ title, text }) => {
  return (
    <div className={styles.oneDetailWrapper}>
      <div className={styles.oneDetailTitleContainer}>
        <span className={styles.oneDetailTitle}>{title}</span>
      </div>

      <div className={styles.oneDetailTextContainer}>
        <span className={styles.oneDetailText}>{text}</span>
      </div>
    </div>
  );
};
