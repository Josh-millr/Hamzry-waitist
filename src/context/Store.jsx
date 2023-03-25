import { createContext, useState } from "react";

export const StoreContext = createContext({});

export function Store({ children }) {
  let [loading, setLoading] = useState(false);

  return (
    <StoreContext.Provider value={{ loading, setLoading }}>
      <div>{children}</div>
    </StoreContext.Provider>
  );
}
