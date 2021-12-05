import {createContext} from "react";

interface AuthContextType {
  user?: string;
  loading: boolean;
  error?: any;
  login: (email: string, password: string) => void;
  signUp: (email: string, name: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
