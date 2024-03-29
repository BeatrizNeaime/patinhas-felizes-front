import { Route, Routes, useNavigate } from "react-router-dom";
import { labelsRoutes } from "./labels.routes";
import { CookiesUtils } from "../utils/cookies.utils";

const Rotas = () => {
  const logged = CookiesUtils.get("logged")
  const navigate = useNavigate();
  return (
    <Routes>
      {labelsRoutes.map((route, index) => {
        if(logged){
          return <Route key={index} path={route.path} element={route.element} />;
        } else {
          navigate("/login");
        }
      })}
    </Routes>
  );
};

export default Rotas;
