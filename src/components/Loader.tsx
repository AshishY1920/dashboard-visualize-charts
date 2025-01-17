import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

interface LoaderProps {
  loading?: boolean;
  color?: string;
  size?: number;
  height?: boolean;
  padding?: string;
}

const Loader: React.FC<LoaderProps> = ({
  loading = false,
  color,
  size,
  height,
  padding,
}) => {
  return (
    <div
      className="loading__container"
      style={{
        height: height ? "100vh" : undefined,
        padding: padding || "40px",
      }}
    >
      <PuffLoader
        color={color || "#ffffff"}
        loading={loading}
        size={size || 20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
