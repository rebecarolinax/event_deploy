import React, { useContext, useState, useEffect } from "react";
import ImageIllustrator from "../../components/ImageIllustrator/ImageIllustrator";
import loginImage from "../../assets/images/login.svg";
import logo from "../../assets/images/logo-pink.svg";
import { Input, Button } from "../../components/FormComponents/FormComponents";
import api, { loginResource } from "../../Services/Service";
import { UserContext, userDecodeToken } from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [user, setUser] = useState({ email: "rebeca@admin.com", senha: "gustavolindo" });
  const {userData, setUserData} = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.nome) {
    navigate("/")
    }
  }, [userData])

  async function handleSubmit(e) {
    e.preventDefault();

    //valida usuario e senha
    //tamanho minimo de caracteres
    if (user.email.trim().length >= 3 || user.senha.trim().length >= 3) {
      //chamar a api
      try {
        const promise = await api.post(loginResource, {
          email: user.email,
          senha: user.senha,
        });

        const userFullToken = userDecodeToken(promise.data.token);
        setUserData(userFullToken);
        localStorage.setItem("token", JSON.stringify(userFullToken))
        navigate('/')
      } catch (error) {
        alert("Verifque os dados e a conexão com a internet!");
        console.log(error);
      }
    } else {
      alert("Preencha os dados corretamente");
      return;
    }
  }
  return (
    <div className="layout-grid-login">
      <div className="login">
        <div className="login__illustration">
          <div className="login__illustration-rotate"></div>
          <ImageIllustrator
            imageRender={loginImage}
            altText="Imagem de um homem em frente de uma porta de entrada"
            additionalClass="login-illustrator"
          />
        </div>

        <div className="frm-login">
          <img src={logo} className="frm-login__logo" alt="" />

          <form className="frm-login__formbox" onSubmit={handleSubmit}>
            <Input
              additionalClass="frm-login__entry"
              type="email"
              id="login"
              name="login"
              required={true}
              value={user.email}
              manipulationFunction={(e) => {
                setUser({ ...user, email: e.target.value.trim() });
              }}
              placeholder="Username"
            />
            <Input
              additionalClass="frm-login__entry"
              type="password"
              id="senha"
              name="senha"
              required={true}
              value={user.senha}
              manipulationFunction={(e) => {
                setUser({ ...user, senha: e.target.value.trim() });
              }}
              placeholder="****"
            />

            <a href="" className="frm-login__link">
              Esqueceu a senha?
            </a>

            <Button
              textButton="Login"
              id="btn-login"
              name="btn-login"
              type="submit"
              additionalClass="frm-login__button"
              manipulationFunction={() => {}}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
