import { icons } from "../styles/icons";
import Login from "../views/auth/login"

export const authLabels = [
  {
    path: "/login",
    element: <Login />,
    show: false,
    label: "Login",
    icon: icons.user,
  },
];
