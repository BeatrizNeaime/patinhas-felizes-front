import { FormProvider, useForm } from "react-hook-form";
import { ButtonSmall, Form } from "../../styles/sharedStyles";
import Modal from "../modal";
import Input from "../forms/input";
import { useEffect } from "react";
import { DonationsServices } from "../../services/donations.services";
import { useDispatch } from "react-redux";
import { closeLoading } from "../../reducers/loading";
import { useNavigate } from "react-router-dom";
import { ThrowToast } from "../../services/toast.services";

const DonationsModal = ({ open, setOpen }) => {
  const {
    register,
    handleSubmit,
    methods,
    setValue,
    formState: { errors },
  } = useForm({ mode: "all" });
  const service = new DonationsServices();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.clear();
    setValue("employee", 1);
  }, []);

  const onSubmit = async (data) => {
    const amount = data.amount.replace(".", "").replace(",", ".");
    data.date = new Date();
    data.amount = amount;
    const a = await service.createDonation(data);
    if(!a){
      dispatch(closeLoading());
    } else {
      ThrowToast.success("Doação adicionada com sucesso!");
      setOpen(false);
    }
  };

  return (
    <Modal
      title={"Nova Doação"}
      subtitle={"Preencha os campos abaixo para adicionar uma nova doação."}
      open={open}
      setOpen={setOpen}
      width={"30vw"}
    >
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Doador"
            {...register("donator", {
              maxLength: 80,
            })}
          />
          <Input
            label="Valor"
            {...register("amount", {
              required: true,
              pattern: /\D/g,
            })}
            onChange={(e) => {
              e.target.value = e.target.value
                .replace(/\D/g, "")
                .replace(/(\d)(\d{2})$/, "$1,$2")
                .replace(/(?=(\d{3})+(\D))\B/g, ".");
            }}
          />
          <Input
            label="Funcionário Responsável"
            {...register("employee", {
              required: true,
            })}
          />
          <ButtonSmall type="submit">Adicionar</ButtonSmall>
        </Form>
      </FormProvider>
    </Modal>
  );
};

export default DonationsModal;
