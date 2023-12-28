import { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../reducers/currentPage";
import { ButtonSmall, Row } from "../styles/sharedStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../styles/icons";
import Header from "../components/header";
import DonationsModal from "../components/add-donation";
import { closeLoading, openLoading } from "../reducers/loading";
import { DonationsServices } from "../services/donations.services";
import Table from "../components/table";
import { formatter } from "../utils/formatter.utils";

const columns = [
  {
    label: "Doador",
    renderCell: (item) => item.donator || "Anônimo",
  },
  {
    label: "Valor",
    renderCell: (item) => formatter.money(item.value),
  },
  {
    label: "Data",
    renderCell: (item) => new Date(item.date).toLocaleDateString("pt-BR"),
  },
  {
    label: "Responsável",
    renderCell: (item) => item.employee,
  },
];

const Donations = () => {
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);
  const service = new DonationsServices();
  const [donations, setDonations] = useState([]);

  const getDonations = async () => {
    dispatch(openLoading());
    const a = await service.getDonations();
    if (a) {
      setDonations(a);
      console.log(a);
      dispatch(closeLoading());
    } else {
      dispatch(closeLoading());
    }
  };

  useLayoutEffect(() => {
    dispatch(changePage("Doações"));
    getDonations();
  }, []);

  return (
    <>
      <Header
        title={"Doações"}
        subtitle={
          "Aqui você pode ver uma relação das doações feitas para o abrigo."
        }
      />
      <Row style={{ justifyContent: "flex-start", margin: "1rem 0" }}>
        <ButtonSmall onClick={() => setAdd(true)}>
          <FontAwesomeIcon icon={icons.add} />
          <p>Nova Doação</p>
        </ButtonSmall>
        <DonationsModal open={add} setOpen={setAdd} />
      </Row>

      <Row style={{ margin: "1rem 0" }} width={"100%"}>
        <Table data={donations} columns={columns} />
      </Row>
    </>
  );
};

export default Donations;
