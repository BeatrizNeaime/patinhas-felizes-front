import Dashboard from "../views/dashboard";
import Animals from "../views/animals";
import { icons } from "../styles/icons";
import Donations from "../views/donations";
import NewAnimal from "../views/animals/new";

export const labelsRoutes = [
    {
        path: "/",
        element: <Dashboard />,
        show: true,
        label: "Dashboard",
        icon: icons.home
    },
    {
        path: "/animais",
        element: <Animals />,
        show: true,
        label: "Animais",
        icon: icons.paw
    },
    {
        path: "/doacoes",
        element: <Donations />,
        show: true,
        label: "Doações",
        icon: icons.donation
    },
    {
        path: "/animais/novo",
        element: <NewAnimal />,
        show: false,
        label: "Novo Animal",
        icon: icons.add
    }
    
]