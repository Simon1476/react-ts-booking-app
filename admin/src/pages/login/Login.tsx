import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { AuthContext } from "../../context/AuthContext";

interface LoginError extends Error {
  response?: {
    success: boolean;
    status: number;
    message: string;
    stack: string;
  };
}
const Login = () => {
  const [credentials, setcredentials] = useState({
    username: "",
    password: "",
  });

  const { state, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        credentials
      );
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      const LoginError = err as LoginError;
      dispatch({
        type: "LOGIN_FAILURE",
        payload: { message: LoginError.message },
      });
    }
  };
  return (
    <S.Container>
      <S.Wrapper>
        <S.Form>
          <S.LoginTitle>Login</S.LoginTitle>
          <S.InputBox>
            <S.Input
              type="text"
              id="username"
              placeholder="Username"
              required
              onChange={handleChange}
            />
            <S.PersonIcon />
          </S.InputBox>
          <S.InputBox>
            <S.Input
              type="password"
              id="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <S.LockIcon />
          </S.InputBox>

          <S.RememberForgot>
            <S.Label>
              <S.CheckBox type="checkbox" />
              Remember me
            </S.Label>
            <S.ForgotPasswordLink to="#">Forgot password?</S.ForgotPasswordLink>
          </S.RememberForgot>

          <S.LoginButton onClick={handleClick}>Login</S.LoginButton>

          <S.Register>
            <S.Signup>
              Don't have an account?
              <S.SignupLink to="#">Register</S.SignupLink>
            </S.Signup>
          </S.Register>
          {state.error && (
            <S.ErrorMessage>{state.error.message}</S.ErrorMessage>
          )}
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #212f3d;
  `,
  Wrapper: styled.div`
    width: 420px;
    padding: 30px 40px;
    color: #fff;
    border-radius: 10px;
    background: transparent;
  `,
  LoginTitle: styled.h1`
    text-align: center;
    font-size: 36px;
  `,
  Form: styled.form``,
  InputBox: styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
  `,
  Input: styled.input`
    width: 100%;
    height: 100%;
    padding: 20px 45px 20px 20px;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    color: #fff;
    font-size: 16px;

    &::placeholder {
      color: #fff;
    }
  `,
  RememberForgot: styled.div`
    display: flex;
    justify-content: space-between;
    margin: -15px 0 15px;
    font-size: 14px;
  `,
  CheckBox: styled.input`
    margin-right: 3px;
    accent-color: #fff;
  `,
  ForgotPasswordLink: styled(Link)`
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `,
  Label: styled.label``,
  LoginButton: styled.button`
    width: 100%;
    height: 45px;
    background-color: #fff;
    color: #333;
    border: none;
    outline: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
  `,
  Register: styled.div`
    text-align: center;
    margin: 20px 0 15px;
  `,
  Signup: styled.p`
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
  `,
  SignupLink: styled(Link)`
    margin-left: 10px;
    color: #fff;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  `,
  ErrorMessage: styled.span`
    display: block;
    text-align: center;
    margin-top: 0.5rem;
    color: #ff0000;
    font-weight: bold;
    font-size: 16px;
  `,
  PersonIcon: styled(PersonIcon)`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
  `,
  LockIcon: styled(LockIcon)`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
  `,
};
