import { useState, useEffect, useCallback, useRef } from "react";
import OneRouteLink from "./OneRouteLink";
import ExcellenceRoute from "../routes/ExcellenceRoute";
import { useNavigate } from "react-router-dom";

const navigationStyleDetails = [
  {
    id: 1,
    navigate: "strategize",
    label: "STRATEGIZE",
    labelBgColor: "#eeb405",
    borderColor: "#d8a200",
    divBackgroundNavigate: "design",
  },
  {
    id: 2,
    navigate: "design",
    label: "DESIGN",
    labelBgColor: "#5893ff",
    borderColor: "#2f76fa",
    divBackgroundNavigate: "build",
  },
  {
    id: 3,
    navigate: "build",
    label: "BUILD",
    labelBgColor: "#00c558",
    borderColor: "#00bd55",
    divBackgroundNavigate: "secure",
  },
  {
    id: 4,
    navigate: "secure",
    label: "SECURE",
    labelBgColor: "#ff2400",
    borderColor: "#d11d00",
    divBackgroundNavigate: "support",
  },
  {
    id: 5,
    navigate: "support",
    label: "SUPPORT",
    labelBgColor: "#5631ff",
    borderColor: "#5631ff",
    divBackgroundNavigate: "",
  },
];

export default function RoutingData() {
  const [pathArr, setPathArr] = useState(["strategize"]);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const navigationRoute = [
    "strategize",
    "design",
    "build",
    "secure",
    "support",
  ];

  const navigateHandler = useCallback(
    (path) => {
      const index = navigationRoute.indexOf(path);
      const navigateArr = navigationRoute.slice(0, index + 1);
      setPathArr(navigateArr);
      navigate(`/${navigateArr[navigateArr?.length - 1]}`);
    },
    [navigationRoute, navigate]
  );

  useEffect(() => {
    let scrollAccumulator = 0;

    const handleScroll = (event) => {
      scrollAccumulator += event.deltaY;
      if (Math.abs(scrollAccumulator) >= 20) {
        // Adjust the threshold as needed
        if (event.deltaY < 0) {
          // Scroll Up
          const currentIndex =
            pathArr.length > 0
              ? pathArr.indexOf(pathArr[pathArr.length - 1])
              : -1;
          if (currentIndex > 0) {
            const newPath = navigationRoute[currentIndex - 1];
            navigateHandler(newPath);
          }
        } else {
          // Scroll Down
          const currentIndex =
            pathArr.length > 0
              ? pathArr.indexOf(pathArr[pathArr.length - 1])
              : -1;
          if (currentIndex < navigationRoute.length - 1) {
            const newPath = navigationRoute[currentIndex + 1];
            navigateHandler(newPath);
            // setNavigatingIndex((prev) => (prev - 1) % pathArr.length);
          }
        }
        scrollAccumulator = 0; // Reset scroll accumulator
      }
    };

    const containerElement = containerRef.current;
    containerElement.addEventListener("wheel", handleScroll);

    return () => {
      containerElement.removeEventListener("wheel", handleScroll);
    };
  }, [pathArr, navigateHandler, navigationRoute]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col  justify-center items-center font-serif mb-12  "
    >
      <div className="border-2 flex-wrap rounded-[45px] p-8 max-sm:p-0 w-[80%] max-sm:w-[100%] bg-white ">
        <div className="flex flex-wrap items-center space-x-4 w-full mb-4 p-4">
          {navigationStyleDetails.map((details) => (
            <OneRouteLink
              key={details.id}
              pathArr={pathArr}
              navigateHandler={navigateHandler}
              details={details}
            />
          ))}
        </div>
        <ExcellenceRoute />
      </div>
    </div>
  );
}
