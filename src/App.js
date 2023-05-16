import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import MiOrg from "./components/MiOrg";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [showForm, updateShow] = useState(false);
  const [collaborators, updateCollaborator] = useState([
    {
      id: uuidv4(),
      name: "Sarah Ferrera",
      position: "Instructora",
      photo: "https://github.com/sarahferrera.png",
      team: "Front End",
    },
    {
      team: "Front End",
      photo: "https://github.com/harlandlohora.png",
      id: uuidv4(),
      name: "Harland Lohora",
      position: "Instructor",
    },
    {
      team: "Programación",
      photo: "https://github.com/genesysaluralatam.png",
      id: uuidv4(),
      name: "Genesys Rondón",
      position: "Desarrolladora de software e instructora",
    },
    {
      team: "UX y Diseño",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      id: uuidv4(),
      name: "Jeanmarie Quijada",
      position: "Instructora en Alura Latam",
    },
    {
      team: "Programación",
      photo: "https://github.com/christianpva.png",
      id: uuidv4(),
      name: "Christian Velasco",
      position: "Head de Alura e Instructor",
    },
    {
      team: "Innovación y Gestión",
      photo: "https://github.com/JoseDarioGonzalezCha.png",
      id: uuidv4(),
      name: "Jose Gonzalez",
      position: "Dev FullStack",
    },
  ]);

  const [teams, updateTeam] = useState([
    {
      id: uuidv4(),
      title: "Programación",
      primaryColor: "#57C278",
      backgroundColor: "#D9F7E9",
    },
    {
      id: uuidv4(),
      title: "Front End",
      primaryColor: "#82CFFA",
      backgroundColor: "#E8F8FF",
    },
    {
      id: uuidv4(),
      title: "Data Science",
      primaryColor: "#A6D157",
      backgroundColor: "#F0F8E2",
    },
    {
      id: uuidv4(),
      title: "Devops",
      primaryColor: "#E06B69",
      backgroundColor: "#FDE7E8",
    },
    {
      id: uuidv4(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      backgroundColor: "#FAE9F5",
    },
    {
      id: uuidv4(),
      title: "Móvil",
      primaryColor: "#FFBA05",
      backgroundColor: "#FFF5D9",
    },
    {
      id: uuidv4(),
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      backgroundColor: "#FFEEDF",
    },
  ]);

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // O podria estar sin el else(:)
  // condicion && seMuestra

  const switchShow = () => {
    updateShow(!showForm);
  };

  //Eliminar colaborador
  const deleteCollaborator = (id) => {
    console.log("Eliminar colaborador", id);
    const NewCollaboratorsList = collaborators.filter(
      (collaborators) => collaborators.id !== id
    );
    // Otra manera de hacer lo mismo: con return
    // const NewCollaboratorsList = collaborators.filter(
    //   (collaborators) =>{
    //     return collaborators.id !== id}
    //   );
    console.log(NewCollaboratorsList);
    updateCollaborator(NewCollaboratorsList);
  };

  //Registrar colaborador
  const registerCollaborator = (collaborator) => {
    console.log("Nuevo colaborador", collaborator);
    updateCollaborator([...collaborators, collaborator]);
  };

  //Actualizar color de equipo
  const updateTeamColor = (newColor, id) => {
    console.log("Actualizar: ", newColor, id);
    const updatedTeam = teams.map((team) => {
      if (team.title === id) {
        team.primaryColor = newColor;
      }

      return team;
    });

    updateTeam(updatedTeam);
  };

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
          deleteCollaborator={deleteCollaborator}
          updateTeamColor={updateTeamColor}
        />
      ))}
      <Footer />;
    </div>
  );
}

export default App;
