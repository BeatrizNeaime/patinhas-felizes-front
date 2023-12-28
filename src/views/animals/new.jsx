import { useDispatch } from "react-redux";
import { Form, Row } from "../../styles/sharedStyles";
import { useLayoutEffect, useState } from "react";
import { changePage } from "../../reducers/currentPage";
import Input from "../../components/forms/input";
import { FormProvider, useForm } from "react-hook-form";
import Header from "../../components/header";
import Select from "../../components/forms/select";
import TextArea from "../../components/forms/textarea";
import { ThrowToast } from "../../services/toast.services";
import { AnimalServices } from "../../services/animals.services";
import { size } from "../../utils/size.obj";
import { useNavigate } from "react-router-dom";
import { closeLoading, openLoading } from "../../reducers/loading";

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
  const navigate = useNavigate();

  const getSpecies = async () => {
    const a = await service.getSpecies();
    if (a) {
      console.log(a)
      setSpecies(a);
      dispatch(closeLoading())
    }
  };

  useLayoutEffect(() => {
    dispatch(changePage("Animais"));
    dispatch(openLoading())
    getSpecies();
  }, []);

  const onSubmit = async (data) => {
    const a = await service.createAnimal(data);
    if (a) {
      ThrowToast.success("Animal cadastrado com sucesso");
      setInterval(() => {
        navigate("/animais");
      }, 800);
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
                required: true
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
          <Row>
            <TextArea
              label="Problemas de Saúde"
              type="number"
              {...register("health_problems")}
            />
          </Row>
          <button type="submit">Enviar</button>
        </Form>
      </FormProvider>
    </>
  );
};

export default NewAnimal;
