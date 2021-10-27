import * as React from "react";

const useMediaQuery = (query: string) => {
  const [mediaQuery, setMediaQuery] = React.useState(() => {
    //if code runs client side, then set media query immediately
    if (typeof window !== "undefined") return window.matchMedia(query).matches;
    return false;
  });
  const [resolved, setResolved] = React.useState((): boolean => {
    //if code is executed client side - resolved is true
    //if (typeof window !== "undefined") return true;
    //runs server side - resolved is false
    return false;
  });
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    setMediaQuery(window.matchMedia(query).matches);
    setResolved(true);
    const onChange = (): void =>
      setMediaQuery(window.matchMedia(query).matches);

    if ("addEventListener" in mql) {
      mql.addEventListener("change", onChange);
      //safari 13.1 and lower does not support addEventListener
    } else if ("addListener" in mql) {
      mql.addListener(onChange);
    }
    return () => {
      if ("addEventListener" in mql) {
        mql.removeEventListener("change", onChange);
        //safari 13.1 and lower does not support addEventListener
      } else if ("addListener" in mql) {
        mql.removeListener(onChange);
      }
    };
  }, []);
  return [mediaQuery, resolved] as const;
};

export default useMediaQuery;
