import "./../styles/components/SvgRenderer.css";

export const SvgRenderer = ({ children, width }) => {
  return (
    <div style={{ width }} className="SvgWrapper">
      {children}
    </div>
  );
};
