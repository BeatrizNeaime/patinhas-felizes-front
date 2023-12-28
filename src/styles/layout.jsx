import { useSelector } from "react-redux";
import Sidebar from "../components/sidebar";
import { Content, Page } from "./sharedStyles";
import Loading from "../components/loading";

const Layout = ({ children }) => {

  const loading = useSelector((state) => state.loading.value);

  return (
    <Page>
      {loading && <Loading />}
      <Sidebar />
      <Content>{children}</Content>
    </Page>
  );
};

export default Layout;
