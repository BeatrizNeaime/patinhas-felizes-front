import { Route, Routes } from "react-router-dom";
import { labelsRoutes } from "./labels.routes";

const Rotas = () => {
  return (
    <Routes>
      {labelsRoutes.map((route, index) => {
        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
};

export default Rotas;
