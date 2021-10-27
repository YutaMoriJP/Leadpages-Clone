import * as React from "react";

const useMounted = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    console.log("useMounted effect called");
    setHasMounted(true);
  }, []);
  return hasMounted;
};

export default useMounted;
