import "./../styles/components/OneDetail.css";

export const OneDetail = ({ title, text }) => {
  return (
    <div className="OneDetailWrapper">
      <div className="OneDetailTitleContainer">
        <span className="OneDetailTitle">{title}</span>
      </div>

      <div className="OneDetailTextContainer">
        <span className="OneDetailText">{text}</span>
      </div>
    </div>
  );
};
