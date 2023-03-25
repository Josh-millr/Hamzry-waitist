import { useRef, useEffect, useState, useContext } from "react";
import LoadingBar from "react-top-loading-bar";

import { StoreContext } from "@/context/Store";

export function Loader() {
  const { loading } = useContext(StoreContext);

  const ref = useRef(null);

  useEffect(() => {
    if (loading) ref.current.continuousStart();
    if (!loading) ref.current.complete();
  }, [loading]);

  return <LoadingBar color="#4ade80" ref={ref} height={4} />;
}
