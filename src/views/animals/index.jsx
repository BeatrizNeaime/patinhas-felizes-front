import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { changePage } from "../../reducers/currentPage";
import { ButtonSmall, Row } from "../../styles/sharedStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../styles/icons";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import { AnimalServices } from "../../services/animals.services";
import Table from "../../components/table";
import { speciesIcons } from "../../utils/species-icons.obj";
import { closeLoading, openLoading } from "../../reducers/loading";

const columns = [
  {
    label: "Nome",
    renderCell: (item) => item.name,
  },
  {
    label: "Raça",
    renderCell: (item) => item.breed,
  },
  {
    label: "Espécie",
    renderCell: (item) => <FontAwesomeIcon icon={speciesIcons[item.species]} size={"2x"} />,
  },
  {
    label: "Tamanho",
    renderCell: (item) => item.size,
  },
  {
    label: "Data de Nascimento",
    renderCell: (item) => new Date(item.birthday).toLocaleDateString("pt-BR"),
  },
  {
    label: "Ações",
    renderCell: (item) => (
      <Link to={`/animais/${item.animal_id}`} style={{ textDecoration: "none" }}>
        <ButtonSmall>
          <FontAwesomeIcon icon={icons.edit} />
        </ButtonSmall>
      </Link>
    ),
  }
];

const Animals = () => {
  const dispatch = useDispatch();
  const service = new AnimalServices();
  const [animals, setAnimals] = useState([]);

  const getAnimals = async () => {
    const a = await service.getAnimals();
    if (a) {
      console.log(a);
      setAnimals(a);
      dispatch(closeLoading());
    }
  };

  useEffect(() => {
    getAnimals();
    dispatch(changePage("Animais"));
    dispatch(openLoading());
  }, []);

  return (
    <>
      <Header
        title={"Animais no Abrigo"}
        subtitle={
          "Aqui você pode conferir os animais que estão no abrigo agora."
        }
      />
      <Row style={{ justifyContent: "flex-start", margin: "1rem 0" }}>
        <Link to="/animais/novo" style={{ textDecoration: "none" }}>
          <ButtonSmall>
            <FontAwesomeIcon icon={icons.add} />
            <p>Adicionar Animal</p>
          </ButtonSmall>
        </Link>
      </Row>

      <Row style={{ margin: "1rem 0" }}>
        <Table data={animals} columns={columns} />
      </Row>
    </>
  );
};

export default Animals;
