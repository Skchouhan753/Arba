/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  let [state, setState] = useState(false);

  return (
    <AuthContext.Provider value={{ authState: state, loginState: setState }}>
      {children}
    </AuthContext.Provider>
  );
}



