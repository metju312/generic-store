import React, {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";

import AuthContext from '../context/AuthContext';

const AuthProvider = ({children}: {children: ReactNode; }) => {
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(false);

  useEffect(() => {
  }, []);

  function login(email: string, password: string) {
    setLoading(true);
  }

  function signUp(email: string, name: string, password: string) {
    setLoading(true);
  }

  function logout() {
  }

  const memoedValue = useMemo(
    () => ({
      loading,
      error,
      login,
      signUp,
      logout,
    }),
    [loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
