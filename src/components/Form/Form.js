import { useState } from "react";
import "./Form.css";
import TextField from "../TextField";
import SelectOptions from "../SelectOptions";
import Button from "../Button";

const Form = (props) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");

  const manageSubmission = (e) => {
    e.preventDefault();
    let dataToSend = {
      name: name,
      //A continuacion: JS sabe que si lo pongo asi es por que el nombre y el componente tienen el mismo valor
      position,
      photo,
      team,
    };
    props.registerCollaborator(dataToSend);
  };

  return (
    <section className="form">
      <form onSubmit={manageSubmission}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <TextField
          title="Nombre"
          placeholder="Ingrese nombre"
          required={true}
          value={name}
          updateValue={setName}
        />
        <TextField
          title="Puesto"
          placeholder="Ingrese puesto"
          required
          value={position}
          updateValue={setPosition}
        />

        <TextField
          title="Foto"
          placeholder="Ingrese enlace de foto"
          required
          value={photo}
          updateValue={setPhoto}
        />

        <SelectOptions
          title="Team"
          placeholder="Seleccione el equipo"
          value={team}
          updateTeam={setTeam}
          teams={props.teams}
        />
        {/* Otra manera de hacerlo: le puedo agregar varios hijos de diferentes tipos: imagenes, texto, etc */}
        <Button>Crear</Button>
      </form>
    </section>
  );
};

export default Form;
