import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { accountAPI } from "../../api/api";
const SignUpButton = ({ isDisable, emailRef, passwordRef }) => {
  const navigate = useNavigate();

  const onClickSignUp = () => {
    accountAPI
      .postSignUp({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        alert("회원가입 완료!");
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <ButtonWrap>
      <ButtonStyled disabled={isDisable} onClick={onClickSignUp}>
        회원가입
      </ButtonStyled>
      <ButtonStyled
        onClick={() => {
          navigate("/");
        }}
        color="#f8246b"
        backColor="white"
      >
        로그인
      </ButtonStyled>
    </ButtonWrap>
  );
};

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonStyled = styled.button`
  margin-bottom: 5px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.backColor || "#f8246b"};
  &:disabled {
    opacity: 0.5;
  }
`;

export default SignUpButton;
