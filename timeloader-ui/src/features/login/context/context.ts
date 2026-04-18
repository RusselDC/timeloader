import { createContext } from "react";
import type { LoginContextType } from "../types";



const LoginContext = createContext<LoginContextType>(null)

export default LoginContext