import "./../styles/components/OneCard.css";
import SmallSkipImage from "./../resources/smallSkip.jpg";
import LargeSkipImage from "./../resources/largeSkip.jpg";
import { OneDetail } from "./OneDetail";

export const OneCard = ({ skip }) => {
  return (
    <div className="OneSkipWrapper">
      <div className="SkipImageWrapper">
        <div className="PriceRibbon">
          <span className="PriceText">£{skip.price_before_vat}</span>
        </div>
        <img
          className="SkipImage"
          alt="Skip"
          src={skip?.size > 16 ? LargeSkipImage : SmallSkipImage}
        />
      </div>
      <div className="TitleSection">
        <span className="SkipTitle">{skip.size} Yard Skip</span>
      </div>
      <div className="DetailsSection">
        <div className="DetailsList">
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
      <button className="orderButton">Select this skip</button>
    </div>
  );
};
