import styles from "styles/components/SvgRenderer.module.css";

export const SvgRenderer = ({ children, width }) => {
  return (
    <div style={{ width }} className={styles.svgWrapper}>
      {children}
    </div>
  );
};
