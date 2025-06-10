import { useState } from "react";
import styles from "styles/components/SkipFilter.module.css";

export const SkipFilters = ({
  skipSizes,
  filters,
  onFilterChange,
  priceBounds,
}) => {
  const [displayFilters, setDisplayFilters] = useState(false);

  const toggleFilters = () => {
    setDisplayFilters((prev) => !prev);
  };

  return (
    <div className={styles.filtersWrapper}>
      {!displayFilters ? (
        <button className={styles.displayFiltersButton} onClick={toggleFilters}>
          ⮝ Display filters
        </button>
      ) : (
        <div className={styles.filters}>
          <div className={styles.dropdownFilter}>
            <label className={styles.sizeLabel}>Select a size</label>
            <select
              value={filters.size}
              className={styles.selectFilter}
              onChange={(e) => onFilterChange("size", Number(e.target.value))}
            >
              <option value="">All sizes</option>
              {skipSizes.map((oneSkipSize) => (
                <option key={oneSkipSize} value={oneSkipSize}>
                  {oneSkipSize}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.priceFilter}>
            <label className={styles.priceLabel}>Price range</label>
            <div className={styles.priceInputsContainer}>
              <input
                type="number"
                min={priceBounds.min}
                max={priceBounds.max}
                value={filters.minPrice}
                className={styles.priceInputs}
                onChange={(e) =>
                  onFilterChange("minPrice", Number(e.target.value))
                }
              />
              <input
                type="number"
                min={priceBounds.min}
                max={priceBounds.max}
                value={filters.maxPrice}
                className={styles.priceInputs}
                onChange={(e) =>
                  onFilterChange("maxPrice", Number(e.target.value))
                }
              />
            </div>
          </div>
          <div className={styles.checkboxFilters}>
            <div className={styles.oneCheckbox}>
              <input
                type="checkbox"
                checked={filters.heavy}
                className={`${styles.checkboxInputs} ${
                  filters.heavy && styles.checkboxChecked
                }`}
                onChange={(e) => onFilterChange("heavy", e.target.checked)}
              />

              <label className={styles.checkboxLabels}>
                Allows heavy waste
              </label>
            </div>
            <div className={styles.oneCheckbox}>
              <input
                type="checkbox"
                checked={filters.onRoad}
                className={`${styles.checkboxInputs} ${
                  filters.onRoad && styles.checkboxChecked
                }`}
                onChange={(e) => onFilterChange("onRoad", e.target.checked)}
              />
              <label className={styles.checkboxLabels}>Allowed on road</label>
            </div>
          </div>
          <button className={styles.hideFiltersButton} onClick={toggleFilters}>
            ⮝ Hide filters
          </button>
        </div>
      )}
    </div>
  );
};
