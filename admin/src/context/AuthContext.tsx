import { Dispatch, createContext, useEffect, useReducer } from "react";

const userFromLocalStorage: string | null =
  localStorage.getItem("user") || null;

export type UserState = {
  user: string | null;
  loading: boolean;
  error: { message: string } | null;
};

const INITIAL_STATE = {
  user: userFromLocalStorage,
  loading: false,
  error: null,
};

type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: string }
  | { type: "LOGIN_FAILURE"; payload: { message: string } }
  | { type: "LOGOUT" };

const AuthReducer = (state: UserState, action: AuthAction): UserState => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

type AuthContextType = {
  state: UserState;
  dispatch: Dispatch<AuthAction>;
};
export const AuthContext = createContext<AuthContextType>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
