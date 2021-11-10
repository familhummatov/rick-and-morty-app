import { useState } from "react";

const useContextData = () => {
  const [state, setState] = useState({ activePage: 1 });

  const changeActivePage = (pageNum = 1) => {
    setState((prev) => ({ ...prev, activePage: pageNum }));
  };
  return { contextData: { state, changeActivePage } };
};
export default useContextData;
