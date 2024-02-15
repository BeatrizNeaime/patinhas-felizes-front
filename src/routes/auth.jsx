import { Route, Routes, useNavigate } from "react-router-dom";
import {authLabels} from './auth.routes'
import { CookiesUtils } from "../utils/cookies.utils";

const AuthRoutes = () => {
  const logged = CookiesUtils.get("logged")
  const navigate = useNavigate();
  return (
    <Routes>
      {authLabels.map((route, index) => {
        if(logged){
          navigate("/");
        } else {
          return <Route key={index} path={route.path} element={route.element} />;
        }
      })}
    </Routes>
  )
}

export default AuthRoutes