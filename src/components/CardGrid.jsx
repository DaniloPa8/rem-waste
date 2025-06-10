import styles from "styles/components/CardGrid.module.css";

import { OneCard } from "./OneCard";
import { useEffect, useState } from "react";
import { SkipFilters } from "./SkipFilter";

export const CardGrid = ({ skipsData }) => {
  const prices = skipsData.map((s) => s.price_before_vat);
  const defaultMin = Math.min(...prices);
  const defaultMax = Math.max(...prices);

  const [filteredSkips, setFilteredSkips] = useState(skipsData);
  const [filters, setFilters] = useState({
    size: null, // empty = “all sizes”
    minPrice: defaultMin,
    maxPrice: defaultMax,
    heavy: false,
    onRoad: false,
  });

  const updateFilter = (field, value) => {
    setFilters((filters) => ({ ...filters, [field]: value }));
  };

  useEffect(() => {
    setFilteredSkips([
      ...skipsData.filter((s) => {
        if (filters.size && s.size !== filters.size) return false;
        if (s.price_before_vat < filters.minPrice) return false;
        if (s.price_before_vat > filters.maxPrice) return false;
        if (filters.heavy && !s.allows_heavy_waste) return false;
        if (filters.onRoad && !s.allowed_on_road) return false;
        return true;
      }),
    ]);
  }, [filters, skipsData]);

  return (
    <div className={styles.cardGridContainer}>
      <SkipFilters
        skipSizes={Array.from(new Set(skipsData.map((s) => s.size)))}
        filters={filters}
        onFilterChange={updateFilter}
        priceBounds={{ min: defaultMin, max: defaultMax }}
      />
      <div className={styles.cardGridWrapper}>
        {filteredSkips.map((oneSkip) => (
          <OneCard skip={oneSkip} />
        ))}
      </div>
    </div>
  );
};
