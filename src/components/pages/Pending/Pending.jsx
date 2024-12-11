import "./Pending.css";

export const Pending = ({ title = "" }) => {
  return (
    <>
      {title !== "" && <h2 className="page-title">{title}</h2>}
      <div className="container under-construction">
        <h2>Page under construction</h2>
      </div>
    </>
  );
};
