import { CSSProperties, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "flex",
  margin: "50vh auto",
  borderColor: "rgba(5,67,190)",
};

export const Spinner = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#fff");

  return (
    <div className="sweet-loading">
      <ClipLoader
        color={color}
        loading={loading}
        size={250}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
