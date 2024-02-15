import {
  Button,
  ButtonSmall,
  Divider,
  Form,
  Row
} from "../../styles/sharedStyles";
import {
  AuthCard,
  AuthContainer,
  AuthOverlay,
  AuthTitle
} from "./components/style";
import Input from "../../components/forms/input";
import { FormProvider, useForm } from "react-hook-form";
import { formatter } from "../../utils/formatter.utils";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../styles/icons";
import AuthService from "../../services/auth.services";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    methods,
    formState: { errors },
  } = useForm({ mode: "all" });
  const [showPwd, setShowPwd] = useState(false);
  const service = new AuthService();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const a = await service.login(data);
    if(a){
      navigate("/dashboard");
    } 
  };

  const formatCpf = (e) => {
    const { value } = e.target;
    const cpf = formatter.cpf(value);
    setValue("cpf", cpf);
  };

  return (
    <AuthOverlay>
      <AuthContainer>
        <AuthCard>
          <AuthTitle>Login</AuthTitle>
          <Divider />
          <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label={"CPF"}
                type="text"
                {...register("cpf", {
                  required: true,
                  onChange: (e) => {
                    formatCpf(e);
                  },
                })}
              />
              <Row style={{ alignItems: "flex-end" }} gap={"10px"}>
                <Input
                  label={"senha"}
                  type={showPwd ? "text" : "password"}
                  {...register("password", {
                    required: true,
                  })}
                />
                <Button type="button" onClick={() => setShowPwd(!showPwd)}>
                  <FontAwesomeIcon
                    icon={showPwd ? icons.eye_slash : icons.eye}
                  />
                </Button>
              </Row>
              <ButtonSmall>Entrar</ButtonSmall>
            </Form>
          </FormProvider>
        </AuthCard>
      </AuthContainer>
    </AuthOverlay>
  );
};

export default Login;
