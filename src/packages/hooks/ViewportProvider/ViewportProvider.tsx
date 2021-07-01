import React from "react";
import { breakpoints } from "../../ui/index";

const viewportContext = React.createContext({});

export const ViewportProvider = ({ children }: any) => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const [height, setHeight] = React.useState(window.innerHeight);

  const [device, setDevice] = React.useState<"tablet" | "desktop" | "mobile">(
    window.innerWidth < breakpoints.mobile
      ? "mobile"
      : window.innerWidth > breakpoints.mobile &&
        window.innerWidth < breakpoints.tablet
      ? "tablet"
      : "desktop"
  );

  const handleWindowResize = () => {
    const isTabletMode =
      window.innerWidth > breakpoints.mobile &&
      window.innerWidth < breakpoints.tablet;
    const ismobileMode = window.innerWidth < breakpoints.mobile;
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    if (isTabletMode) {
      setDevice("tablet");
    } else if (ismobileMode) {
      setDevice("mobile");
    } else {
      setDevice("desktop");
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <viewportContext.Provider value={{ width, height, device }}>
      {children}
    </viewportContext.Provider>
  );
};

interface viewportProps {
  width: number;
  height: number;
  device: "tablet" | "desktop" | "mobile";
}

export const useViewport = () => {
  const { width, height, device } = React.useContext(
    viewportContext
  ) as viewportProps;

  return { width, height, device };
};
