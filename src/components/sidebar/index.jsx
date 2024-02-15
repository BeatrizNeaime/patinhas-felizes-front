import { Column } from "../../styles/sharedStyles";
import {
  SidebarLink,
  SidebarLinkContainer,
  SidebarWrapper,
} from "./components/styles";
import { labelsRoutes } from "../../routes/labels.routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const cp = useSelector((state) => state.currentPage.value);

  return (
    <SidebarWrapper>
      <Column
        style={{
          justifyContent: "flex-start",
          padding: "10px",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        {labelsRoutes.map((route, index) => {
          if (route.show) {
            return (
              <Link
                to={route.path}
                style={{ textDecoration: "none" }}
                key={index}
              >
                <SidebarLinkContainer
                  active={route.label === cp ? true : false}
                >
                  <FontAwesomeIcon icon={route.icon} />
                  <SidebarLink active={route.label === cp ? true : false}>
                    {route.label}
                  </SidebarLink>
                </SidebarLinkContainer>
              </Link>
            );
          }
        })}
      </Column>
    </SidebarWrapper>
  );
};

export default Sidebar;
