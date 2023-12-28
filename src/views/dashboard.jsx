import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../reducers/currentPage";
import Header from "../components/header";

const Dashboard = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(changePage("Dashboard"));
  }, []);

  return (
    <>
      <Header
        title={"Dashboard"}
        subtitle={"Aqui você pode ver um resumo das informações do abrigo."}
      />
    </>
  );
};

export default Dashboard;
