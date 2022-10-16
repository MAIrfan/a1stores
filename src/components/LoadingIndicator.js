import React from "react";
import ReactLoading from "react-loading";
import colors from "../theme/colors";

export default ({
  loading,
  message = "",
  spinColor = colors.darkBlue,
  className = "",
  loadingType = "spin",
  width = 30,
  height = 30,
}) => {
  if (!loading) {
    return null;
  }

  return (
    <div
      className={`loading-container ${className}`}
      data-testid="display-loading-indicator"
    >
      <div className="loading-icon">
        <ReactLoading
          type={loadingType}
          color={spinColor}
          width={width}
          height={height}
        />
      </div>
      <div className="loading-message">{message}</div>
    </div>
  );
};
