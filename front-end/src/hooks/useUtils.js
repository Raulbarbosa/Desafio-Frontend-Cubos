import { useContext } from "react";
import Context from "../contexts/context";

function useUtils() {
  return useContext(Context);
}

export default useUtils;
