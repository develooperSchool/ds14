import { useContext } from "react";
import BackendContext from "../context/BackendContext";

const useBackendUrl = () => {
  return useContext(BackendContext);
};

export default useBackendUrl;
