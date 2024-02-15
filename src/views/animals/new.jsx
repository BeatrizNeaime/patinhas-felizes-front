import { useDispatch } from "react-redux";
import {
  ButtonSmall,
  Column,
  Form,
  Row,
  Text,
} from "../../styles/sharedStyles";
import { useLayoutEffect, useState } from "react";
import { changePage } from "../../reducers/currentPage";
import Input from "../../components/forms/input";
import { FormProvider, useForm } from "react-hook-form";
import Header from "../../components/header";
import Select from "../../components/forms/select";
import { ThrowToast } from "../../services/toast.services";
import { AnimalServices } from "../../services/animals.services";
import { size } from "../../utils/size.obj";
import { useNavigate } from "react-router-dom";
import { closeLoading, openLoading } from "../../reducers/loading";
import Checkbox from "../../components/forms/checkbox";
import TextArea from "../../components/forms/textarea";

const NewAnimal = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    methods,
    formState: { errors },
  } = useForm({ mode: "all" });
  const service = new AnimalServices();
  const [species, setSpecies] = useState([]);
  const [hp, setHp] = useState(false);
  const navigate = useNavigate();

  const getSpecies = async () => {
    try {
      const a = await service.getSpecies();
      if (a) {
        console.log(a);
        setSpecies(a);
        dispatch(closeLoading());
      }
    } catch (error) {
      console.log(error);
      dispatch(closeLoading());
    }
  };

  useLayoutEffect(() => {
    dispatch(changePage("Animais"));
    dispatch(openLoading());
    getSpecies();
  }, []);

  const onSubmit = async (data) => {
    try {
      const send = {
        ...data,
        health_problems: hp ? 1 : 0,
      };
      const a = await service.createAnimal(send);
      if (a) {
        ThrowToast.success("Animal cadastrado com sucesso");
        navigate("/animals")
      }
    } catch (error) {
      console.log(error);
      ThrowToast.error("Erro ao cadastrar animal");
    }
  };

  if (errors) {
    if (errors.name) {
      ThrowToast.error("Nome inválido");
    } else if (errors.breed) {
      ThrowToast.error("Raça inválida");
    } else if (errors.birthday) {
      ThrowToast.error("Data de nascimento inválida");
    } else if (errors.species) {
      ThrowToast.error("Espécie inválida");
    }
  }

  return (
    <>
      <Header
        title="Novo Animal"
        subtitle="Aqui você pode adicionar um novo animal ao abrigo."
      />
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Input
              label="Nome"
              {...register("name", {
                required: true,
              })}
            />

            <Select
              label="Espécie"
              {...register("species")}
              options={species}
            />

            <Select label="Porte" {...register("size")} options={size} />
          </Row>
          <Row>
            <Input
              label="Raça"
              {...register("breed", {
                required: true,
              })}
            />
            <Input
              label="Data de Nascimento"
              type="date"
              {...register("birthday", {
                required: true,
              })}
            />
          </Row>
          <Row style={{ justifyContent: "flex-start" }}>
            <Checkbox
              label="Problemas de Saúde"
              {...register("health_problems")}
              onChange={(e) => {
                setHp(e.target.checked);
              }}
            />
          </Row>
          <Column
            style={{
              transition: "all 2s ease",
              display: hp ? "flex" : "none",
              alignItems: "flex-start",
            }}
          >
            <TextArea
              label="Descrição"
              {...register("health_problems_description")}
            />
            <div style={{width: "100%"}}>
              <Text>
                Insira as medicações que o animal toma, separando-as por
                vírgula.
              </Text>
              <TextArea label="Medicações" {...register("medicines")} />
            </div>
          </Column>
          <ButtonSmall type="submit">Enviar</ButtonSmall>
        </Form>
      </FormProvider>
    </>
  );
};

export default NewAnimal;
