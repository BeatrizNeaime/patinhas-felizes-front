import Card from "../../../components/card";
import { Row } from "../../../styles/sharedStyles";
import { CardTitle, Counter } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../../styles/icons";
import { colors } from "../../../styles/constants";
import { Link } from "react-router-dom";

const DashCard = ({ type, data }) => {
  let config;

  switch (type) {
    case "donations":
      config = {
        title: "doações",
        icon: icons.donation,
        icon_color: colors.green,
        isMoney: true,
        path: "/doacoes"
      };
      break;

    case "animals":
      config = {
        title: "animais no abrigo",
        icon: icons.paw,
        icon_color: colors.green,
        isMoney: false,
        path: "/animais"
      };
      break;

    case "adopters":
      config = {
        title: "adotantes",
        icon: icons.people,
        icon_color: colors.green,
        isMoney: false,
        path: "/adotantes"
      };
      break;

    default:
      break;
  }

  return (
    <Card>
      <Link to={config.path} style={{ textDecoration: "none" }}>
        <Row style={{ justifyContent: "space-between", padding: "2px 10px" }}>
          <CardTitle>{config.title}</CardTitle>
          <FontAwesomeIcon icon={config.icon} color={config.icon_color} />
        </Row>
        <Counter>
          {config.isMoney && (
            <span>
              {parseFloat(data.amount).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          )}
          {!config.isMoney && <span>{data.amount}</span>}
        </Counter>
      </Link>
    </Card>
  );
};

export default DashCard;
