import styled from "styled-components";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";

export type UserInputType = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
};

type Props = {
  inputs: UserInputType[];
  title: string;
};
const New = ({ inputs, title }: Props) => {
  const [file, setFile] = useState<Blob | null>(null);
  const [info, setInfo] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  return (
    <>
      <S.Top>
        <S.Title>{title}</S.Title>
      </S.Top>
      <S.Bottom>
        <S.Left>
          <S.Img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
          />
        </S.Left>
        <S.Right>
          <S.Form>
            <S.FormInput>
              <S.Label>
                Image : <S.UploadIcon />{" "}
              </S.Label>
              <S.Input type="file" id="file" />
            </S.FormInput>

            {inputs.map((input) => (
              <S.FormInput key={input.id}>
                <S.Label>{input.label}</S.Label>
                <S.Input
                  onChange={handleChange}
                  type={input.type}
                  placeholder={input.placeholder}
                  id={input.id}
                />
              </S.FormInput>
            ))}

            <S.SendButton>Send</S.SendButton>
          </S.Form>
        </S.Right>
      </S.Bottom>
    </>
  );
};

export default New;

const S = {
  Top: styled.div`
    display: flex;
    margin: 20px;
    padding: 10px;
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  `,
  Title: styled.h1`
    color: lightgray;
    font-size: 20px;
  `,
  Bottom: styled.div`
    display: flex;
    margin: 20px;
    padding: 10px;
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  `,
  Left: styled.div`
    flex: 1;
    text-align: center;
  `,
  Right: styled.div`
    flex: 2;
    padding: 0px 20px;
  `,
  Img: styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  `,
  Form: styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
  `,
  FormInput: styled.div`
    width: 40%;
  `,
  Label: styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  Input: styled.input`
    width: 100%;
    padding: 5px;
    border: none;
    border-bottom: 1px solid gray;
  `,
  SendButton: styled.button`
    width: 150px;
    margin-top: 10px;
    padding: 10px;
    color: white;
    background-color: teal;
    border: none;
    font-weight: bold;
    cursor: pointer;
  `,
  UploadIcon: styled(DriveFolderUploadOutlinedIcon)`
    cursor: pointer;
  `,
};
