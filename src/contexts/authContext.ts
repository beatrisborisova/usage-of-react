import React, { createContext, Dispatch } from "react";

export const AuthContext = createContext({
    hasUser: false,
    setHasUser: (value: boolean) => { }
});