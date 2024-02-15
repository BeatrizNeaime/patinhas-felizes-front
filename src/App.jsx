import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./routes/routes";
import Layout from "./styles/layout";
import GlobalStyle from "./globalStyle";
import store from "./store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthRoutes from "./routes/auth";

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <AuthRoutes/>
          <Layout>
            <GlobalStyle />
            <Rotas />
          </Layout>
        </Provider>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
