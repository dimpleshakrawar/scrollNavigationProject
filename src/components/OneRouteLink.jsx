import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function OneRouteLink({ navigateHandler, pathArr, details }) {
  const { navigate, label, labelBgColor, borderColor, divBackgroundNavigate } =
    details;

  const getButtonStyle = (navigate) => {
    if (pathArr.includes(navigate)) {
      return {
        backgroundColor: labelBgColor,
        color: "white",
        borderColor: borderColor,
      };
    } else {
      return {
        color: "black",
      };
    }
  };

  return (
    <>
      <Link
        to={`/${navigate}`}
        className={`button px-5 py-2 rounded-3xl text-lg border-2 !m-0 `}
        style={getButtonStyle(navigate)}
        onClick={() => navigateHandler(navigate)}
      >
        {label}
      </Link>
      {navigate !== "support" ? (
        <div
          className={`border !m-0 h-2 w-[5rem] ${
            pathArr.includes(divBackgroundNavigate) === true
              ? "bg-black"
              : "bg-slate-300"
          }   transition-all duration-100 ease-in-out  `}
        />
      ) : (
        <div />
      )}
    </>
  );
}

OneRouteLink.propTypes = {
  navigateHandler: PropTypes.func,
  pathArr: PropTypes.array,
  details: PropTypes.object,
};
