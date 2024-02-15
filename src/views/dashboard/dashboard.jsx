import { useLayoutEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../reducers/currentPage";
import Header from "../../components/header";
import { Row } from "../../styles/sharedStyles";
import DashCard from "./components/card";
import { AnimalServices } from "../../services/animals.services";
import { ThrowToast } from "../../services/toast.services";
import { closeLoading, openLoading } from "../../reducers/loading";
import { DonationsServices } from "../../services/donations.services";
import { AdoptersServices } from "../../services/adopters.services";

const Dashboard = () => {
  const dispatch = useDispatch();
  const AnService = new AnimalServices();
  const DService = new DonationsServices();
  const AdService = new AdoptersServices();

  const [data, setData] = useState({
    donations: 0,
    animals: 0,
    adopters: 0,
  });

  const getAnimals = async () => {
    try {
      // const a = await AnService.countAnimals();
      // const b = await DService.getDonations()
      // const c = await AdService.countAdopters()
      let sum = 0;

      b.forEach((donation) => {
        sum += donation.amount;
      })

      setData({ ...data, animals: a, donations: sum, adopters: c});
      dispatch(closeLoading())
    } catch (error) {
      ThrowToast.error(error);
      dispatch(closeLoading())
    }
  };

  useLayoutEffect(() => {
    dispatch(openLoading());
    getAnimals();
    dispatch(changePage("Dashboard"));
  }, []);

  return (
    <>
      <Header
        title={"Dashboard"}
        subtitle={"Aqui você pode ver um resumo das informações do abrigo."}
      />
      <Row>
        <DashCard type={"donations"} data={{ amount: data.donations }} />
        <DashCard type={"animals"} data={{ amount: data.animals }} />
        <DashCard type={"adopters"} data={{ amount: data.adopters }} />
      </Row>
    </>
  );
};

export default Dashboard;
