import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import MiOrg from "./components/MiOrg";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [showForm, updateShow] = useState(false);
  const [collaborators, updateCollaborator] = useState([]);

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // O podria estar sin el else(:)
  // condicion && seMuestra

  const switchShow = () => {
    updateShow(!showForm);
  };

  //Registrar colaborador
  const registerCollaborator = (collaborator) => {
    console.log("Nuevo colaborador", collaborator);
    updateCollaborator([...collaborators, collaborator]);
  };

  //Lista de equipos
  const teams = [
    {
      title: "Programación",
      primaryColor: "#57C278",
      backgroundColor: "#D9F7E9",
    },
    {
      title: "Front End",
      primaryColor: "#82CFFA",
      backgroundColor: "#E8F8FF",
    },
    {
      title: "Data Science",
      primaryColor: "#A6D157",
      backgroundColor: "#F0F8E2",
    },
    {
      title: "Devops",
      primaryColor: "#E06B69",
      backgroundColor: "#FDE7E8",
    },
    {
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      backgroundColor: "#FAE9F5",
    },
    {
      title: "Móvil",
      primaryColor: "#FFBA05",
      backgroundColor: "#FFF5D9",
    },
    {
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      backgroundColor: "#FFEEDF",
    },
  ];
  return (
    <div>
      <Header />
      {/* {showForm === true ? <Form /> : <></>} */}
      {/* Otra menera: */}
      {showForm && (
        <Form
          teams={teams.map((team) => team.title)}
          registerCollaborator={registerCollaborator}
        />
      )}
      <MiOrg switchShow={switchShow} />
      {teams.map((team) => (
        <Team
          data={team}
          key={team.title}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.title
          )}
        />
      ))}
      <Footer />;
    </div>
  );
}

export default App;
