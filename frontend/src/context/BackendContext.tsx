import React, { createContext, useState } from "react";

interface IBackendContext {
  backendUrl: any;
}

const BackendContext = createContext<IBackendContext>({
  backendUrl: process.env.REACT_APP_API_URL || `http://localhost:4444`,
});

interface UrlProviderProps {
  children: React.ReactNode;
}

export const BackendProvider = ({ children }: UrlProviderProps) => {
  const [backendUrl, setBackendUrl] = useState({});

  return (
    <BackendContext.Provider value={{ backendUrl }}>
      {children}
    </BackendContext.Provider>
  );
};

export default BackendContext;
