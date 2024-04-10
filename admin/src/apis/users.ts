import axios from "axios";
import { UserDataResponse } from "../types/apis/users";

export const getUsers = async (url: string): Promise<UserDataResponse[]> => {
  try {
    const res = await axios.get("http://localhost:8800/api" + url);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error; // 에러를 다시 throw하여 컴포넌트에서 처리할 수 있도록 합니다.
  }
};
