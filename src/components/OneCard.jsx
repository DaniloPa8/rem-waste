import styles from "styles/components/OneCard.module.css";
import SmallSkipImage from "resources/smallSkip.jpg";
import LargeSkipImage from "resources/largeSkip.jpg";

import { OneDetail } from "./OneDetail";

export const OneCard = ({ skip }) => {
  return (
    <div className={styles.oneSkipWrapper}>
      <div className={styles.skipImageWrapper}>
        <div className={styles.priceRibbon}>
          <span className={styles.priceText}>£{skip.price_before_vat}</span>
        </div>
        <img
          className={styles.skipImage}
          alt={`${skip.size} yard skip`}
          src={skip?.size > 16 ? LargeSkipImage : SmallSkipImage}
        />
      </div>
      <div className={styles.titleSection}>
        <span className={styles.skipTitle}>{skip.size} Yard Skip</span>
      </div>
      <div className={styles.detailsSection}>
        <div className={styles.detailsList}>
          {skip.hire_period_days && (
            <OneDetail
              title={"Hire period"}
              text={`${skip.hire_period_days} days`}
            />
          )}
          {skip.transport_cost && (
            <OneDetail
              title={"Transport cost"}
              text={`£${skip.transport_cost}`}
            />
          )}
          {skip.per_tonne_cost && (
            <OneDetail
              title={"Per tone cost"}
              text={`£${skip.per_tonne_cost}`}
            />
          )}
          {skip.allowed_on_road && (
            <OneDetail
              title={"Allowed on road"}
              text={`${skip.allowed_on_road ? "✅" : "⛔"}`}
            />
          )}
          {skip.allows_heavy_waste && (
            <OneDetail
              title={"Allows heavy waste"}
              text={`${skip.allows_heavy_waste ? "✅" : "⛔"}`}
            />
          )}
        </div>
      </div>
      <button className={styles.orderButton}>Select this skip</button>
    </div>
  );
};
